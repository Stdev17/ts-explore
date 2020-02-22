interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    markerContent(): string;
}

export class Map {
    private googleMap: google.maps.Map<Element>;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(
            <Element>document.getElementById(divId),
            {
                zoom: 2,
                center: {
                    lat: 0,
                    lng: 0
                }
            }
        );
    }

    addMarker(target: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: target.location.lat,
                lng: target.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: target.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
