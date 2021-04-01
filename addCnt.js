const addCnt = function(json, cnt) {
    const features = json.features;
    const keys = Object.keys(cnt);
    for(let i=0; i<features.length; i++) {
        let key = keys[i]
        if (features[i]["properties"]["SIG_CD"] === key.toString()){
            features[i]["properties"]["COUNT"] = cnt[key]
        }
    } 
    return json;
}
