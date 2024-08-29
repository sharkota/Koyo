async function get_status() {
    const status_res = await fetch('/assets/api/status.txt');
    const status_data = await status_res.text();
    document.getElementById('status').innerText = status_data
}

get_status()