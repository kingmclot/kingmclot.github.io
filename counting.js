const counting = function (json) {
    const count_per_destrict = new Object();
    let features = json.features;
    for(let i=0; i<features.length; i++) {
        let district_code = features[i]["properties"]["district_code"];
        count_per_destrict[district_code] ? count_per_destrict[district_code] += 1 : count_per_destrict[district_code] = 1
    } 
    return count_per_destrict;
}
