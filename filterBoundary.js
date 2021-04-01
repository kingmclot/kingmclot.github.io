const filterBoundary = function(json, si_code) {
    const result = {   "type":"FeatureCollection",
    "bbox":[
      124.7893154389517,
      33.17261058239259,
      130.96325546758288,
      38.54261253850525
    ],
    "features":[]}
    const features = json.features;
    for(let i=0; i<features.length; i++) {
        if((features[i]["properties"]["SIG_CD"]).slice(0,2) == si_code.toString()) {
            (result["features"]).push(features[i])
        }
    } 
    return result;
}
