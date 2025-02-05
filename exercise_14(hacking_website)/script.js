
const randomdelay = () => {
    return new Promise((resolve, reject) => {
        let random = Math.floor((1 + (Math.random() * 6)));
        timeout = random * 1000;
        setTimeout(() => {
            resolve()
        }, timeout);
    })
}

let text = ["Initialized Hacking now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"]
async function main() {
    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 100);
    const addItem = async (item) => {
        await randomdelay();
        let div = document.createElement("div")
        div.innerHTML = item;
        document.body.append(div)

    }
    for (const item of text) {
        await addItem(item)
    }
    await randomdelay()
    clearInterval(t)
}
main()