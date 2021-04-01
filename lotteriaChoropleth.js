const getLotteriaColor = function(cnt) {
    return cnt > 13 ? '#b10026' :
           cnt > 11  ? '#e31a1c' :
           cnt > 9  ? '#fc4e2a' :
           cnt > 7  ? '#fd8d3c' :
           cnt > 5   ? '#feb24c' :
           cnt > 3   ? '#fed976' :
           cnt > 0   ? '#ffeda0' :
                      '#ffffcc';
}

const lotteriaStyle = function(feature) {
        return {
            fillColor: getLotteriaColor(feature["properties"]["COUNT"]), 
            weight: 2, 
            opacity: 1, 
            color: 'white', 
            dashArray: 3, 
            fillOpacity: 0.7
        }
}