const getMcDonaldsColor = function(cnt) {
    return cnt > 13 ? '#252525' :
           cnt > 11  ? '#525252' :
           cnt > 9  ? '#737373' :
           cnt > 7  ? '#969696' :
           cnt > 5   ? '#bdbdbd' :
           cnt > 3   ? '#d9d9d9' :
           cnt > 0   ? '#f0f0f0' :
                      '##ffffff';
}

const mcDonaldsStyle = function(feature) {
        return {
            fillColor: getMcDonaldsColor(feature["properties"]["COUNT"]), 
            weight: 2, 
            opacity: 1, 
            color: 'white', 
            dashArray: 3, 
            fillOpacity: 0.7
        }
}