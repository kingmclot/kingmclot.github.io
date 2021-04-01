const getBurgerKingColor = function(cnt) {
    return cnt > 13 ? '#084594' :
           cnt > 11  ? '#2171b5' :
           cnt > 9  ? '#4292c6' :
           cnt > 7  ? '#6baed6' :
           cnt > 5   ? '#9ecae1' :
           cnt > 3   ? '#c6dbef' :
           cnt > 0   ? '#deebf7' :
                      '#f7fbff';
}

const burgerKingStyle = function(feature) {
        return {
            fillColor: getBurgerKingColor(feature["properties"]["COUNT"]), 
            weight: 2, 
            opacity: 1, 
            color: 'white', 
            dashArray: 3, 
            fillOpacity: 0.7
        }
}

