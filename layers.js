const layers = {
    "버거킹": seoulBurgerKingLayer,
    "맥도날드": seoulMcDonaldsLayer, 
    "롯데리아": seoulLotteriaLayer
};

const popupLayers = {
    "B 팝업" : burgerKingPopup,
    "M 팝업": mcDonaldsPopup,
    "L 팝업" : lotteriaPopup
}
 
L.control.layers(layers, popupLayers).addTo(map);