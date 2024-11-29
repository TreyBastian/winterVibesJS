window.addEventListener("DOMContentLoaded", () => {
    const defaults = {
        v: 1,
        cw: 320,
        ch: 180,
        smx: 40,
        smnsz: 1,
        smxsz: 4,
        smxspd: 0.07,
        snmnspd: 0.04,
        plwspd: 0.1,
        plwd: "left",
        plws: 1,
        gamax: 4,
        gas: 20
    }

    let params = {};

    if (document.referrer.includes("/")) {
        const indexParms = new URLSearchParams(new URL(document.referrer).search);

        for (const [key, value] of indexParms.entries()) {
            params[key] = value;
        }
    } else {
        params = { ...defaults }
    }

    document.querySelectorAll("input").forEach(input => {
        input.value = params[input.name] || "";
      });
})