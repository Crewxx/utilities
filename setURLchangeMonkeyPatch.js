const quickli_page_change_monitor = 'quickli_page_change_monitor';
function setURLchangeMonkeyPatch(id){
    const reg = (o, n) => o ? o[n] : '';
    const cn = (o, s) => o ? o.getElementsByClassName(s) : null;
    const tn = (o, s) => o ? o.getElementsByTagName(s) : null;
    const gi = (o, s) => o ? o.getElementById(s) : null;
    const ele = (t) => document.createElement(t);
    const attr = (o, k, v) => o.setAttribute(k, v);
    const a = (l, r) => r.forEach(a => attr(l, a[0], a[1]));
    const monitor = ele('div');
    a(monitor,[['id',id],['current_url_displayed',window.location.href],['style','display: fixed;']]);
    document.body.appendChild(monitor);
}
function hasPageUrlChanged(id){
    const gi = (o, s) => o ? o.getElementById(s) : null;
    const url = window.location.href;
    const monitor_elm = gi(document,id);
    const url_onlast_state = monitor_elm?.getAttribute('current_url_displayed');
    if(url_onlast_state != url) {
        monitor_elm.setAttribute('current_url_displayed',url);
        return true;
    }else return false;
}
function monitorURLChanges(){
    let has_changed = hasPageUrlChanged(quickli_page_change_monitor);
    if(has_changed) // Do some stuff
    else console.log('no change');
}
async function initClientOptionsMenu(){
    const bg_res = await requestFromBackground();
    if(bg_res.run_these) bg_res.run_these.forEach(i=> Object.values(i).forEach(v=> eval(v)));
}
setURLchangeMonkeyPatch(quickli_page_change_monitor);
window.onmousemove = monitorURLChanges;