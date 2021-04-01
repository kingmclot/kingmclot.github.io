const popup = function(json) {
    let features = json["features"]
    let popups = [];
    for(let i=0; i<features.length; i++) {
        let latitude = features[i]["properties"]["latitude"];
        let longitude = features[i]["properties"]["longitude"];
        let store_name = features[i]["properties"]["store_name"]
        popups.push(L.marker([latitude, longitude]).bindPopup(store_name));
   } 
   return L.layerGroup(popups);
}                        