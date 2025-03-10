/*
 * @Author: jianminlu
 * @Date:   2016-05-16 10:38:38
 * @Last Modified by:   jianminlu
 * @Last Modified time: 2024-03-10 19:41:24
 */

'use strict';

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const tab = tabs[0];
    $('#qrcode').qrcode({
        text: tab.url,
        width: "250",
        height: "250"
    });

    $('#url').val(tab.url);
    $('#title').val(tab.title);
});