import workerize from "./workerize";

const iterations = 100;

export const round = num => parseFloat(num).toFixed(0);
const median = xs => xs.sort()[Math.ceil(xs.length / 2)];

export const msToμs = num => Math.floor(num * 1000);

export async function run(test) {
  const times = [];
  try {
    let done = iterations;
    while (done > 0) {
      let time = await eval(
        `async ()=> {${test.before};let end,start = performance.now();${
          test.code
        };end = performance.now();return end - start;}`
      )();
      times.push(time);
      done--;
    }
    return {
      error: false,
      median: median(times)
    };
  } catch (e) {
    return {
      error: true,
      median: 0
    };
  }
}

export async function runInWorker(test) {
  const code = `async function run() {try{${
    test.before
  };let end,start = performance.now();${
    test.code
  };end = performance.now();return end - start;}catch(e){return -1}}`;

  try {
    eval(code);
  } catch (e) {
    return {
      error: true,
      median: 0
    };
  }

  const worker = workerize(`export ${code}`);
  const times = [];

  let done = iterations;
  let err = false;
  while (done > 0) {
    let time = await worker.run();
    if (time < 0) {
      err = true;
      break;
    }
    times.push(time);
    done--;
  }

  worker.terminate();

  if (err) {
    return {
      error: true,
      median: 0
    };
  } else {
    return {
      error: false,
      median: median(times)
    };
  }
}

export function setHash(before, codes) {
  location.hash = `#/${btoa(before)}/${btoa(JSON.stringify(codes))}`;
}

export function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function cancellable(promise) {
  let cancelled = false;
  let pr = new Promise((res, rej) => {
    promise
      .then(function() {
        if (!cancelled) res(...arguments);
        else rej({ message: "Cancelled" });
      })
      .catch(function() {
        rej(...arguments);
      });
  });
  pr.cancel = () => {
    cancelled = true;
  };
  return pr;
}
