import { useState } from "react";
import { Map, useKakaoLoader, MapMarker } from "react-kakao-maps-sdk";

interface IMap {
    lat: number;
    lng: number;
}

function MapComp() {
    const [loading, error] = useKakaoLoader({
        appkey: "", // 발급 받은 APPKEY
    });

    const [position, setPosition] = useState<IMap>();

    return (
        <div>
            <Map
                center={{ lat: 37.485190343831675, lng: 126.90152970589418 }}
                level={3}
                onClick={(_t, mouseEvent) =>
                    setPosition({
                        lat: mouseEvent.latLng.getLat(),
                        lng: mouseEvent.latLng.getLng(),
                    })
                }
                className="w-screen h-screen"
            >
                {position && <MapMarker position={position} />}
            </Map>
        </div>
    );
}

export default MapComp;
