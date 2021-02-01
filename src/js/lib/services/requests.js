import $lib from '../core';

$lib.prototype.get = async function (url, responseType = 'json') {
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

   switch (responseType) {
       case 'json':
           return await res.json();
       case 'text':
           return await res.text();
       case 'blob':
           return await res.blob();
   }
}

$lib.prototype.post = async function (url, data, responseType = 'text') {
    const res = await fetch(url, {
        method: 'POST',
        body: data
    });

    switch (responseType) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
}