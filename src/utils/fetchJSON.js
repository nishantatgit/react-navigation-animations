const getJSON = (url,cb) => {
    const getJSONData = async () => {
        const data = await fetch(url).then(response => response.json());
        if(cb && typeof cb === 'function'){
            cb(data);
        }
    }
    getJSONData();
}

export { getJSON };