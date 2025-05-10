import isMobileDevice from "./isMobileDevice.js"
const asidePanel = document.querySelector('.map__aside__panel')
const asidePanelBlocks = document.querySelectorAll('.map__aside__block')

ymaps.ready(init)

function init() {
    const buildingLocation = [44.440, 34.10]

    const map = new ymaps.Map("ymap", {
        center: buildingLocation,
        zoom: 17,
        controls: []
    })


    loadBuildingBoundaries(map)
}

function loadBuildingBoundaries(map) {
    const buildingId = 888690320

    const overpassQuery = `
        [out:json][timeout:25];
        way(${buildingId});
        out geom;
    `

    fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: 'data=' + encodeURIComponent(overpassQuery)
    })
        .then(response => response.json())
        .then(data => {
            if (data.elements.length === 0) {
                console.error('Здание не найдено.')
                return
            }

            const coordinates = []
            data.elements[0].geometry.forEach(point => {
                coordinates.push([point.lat, point.lon])
            })

            const buildingPolygon = new ymaps.Polygon(
                [coordinates],
                {},
                {
                    fillColor: 'rgba(255, 212, 0, 0.2)',
                    strokeColor: 'rgba(255, 212, 0, 0.2)',
                    strokeWidth: 3
                }
            )

            map.geoObjects.add(buildingPolygon)

            const polygonCenter = getPolygonCenter(coordinates)
            addCustomMarker(map, polygonCenter, 'Берлога кнопочки', 'rgba(255, 212, 0, 0.7)')
        })
        .catch(error => console.error('Ошибка загрузки данных:', error))
}

function getPolygonCenter(coordinates) {
    const latitudes = coordinates.map(coord => coord[0])
    const longitudes = coordinates.map(coord => coord[1])

    const centerLat = (Math.min(...latitudes) + Math.max(...latitudes)) / 2
    const centerLon = (Math.min(...longitudes) + Math.max(...longitudes)) / 2

    return [centerLat, centerLon]
}

function addCustomMarker(map, position, title, backgroundColor) {
    let customLayout

    if (!isMobileDevice()) {
        customLayout = ymaps.templateLayoutFactory.createClass(`
            <span class="flex align__center building__hint" style="background: ${backgroundColor}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.1123 12.073H12.1834M12.1834 12.073H19.2544M12.1834 12.073V19.1441M12.1834 12.073V5.00195" stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ${title}
            </span>
        `)
    } else {
        customLayout = ymaps.templateLayoutFactory.createClass(`
            <div class="flex align__center column building__mobile__hint">
                <div class="building__preview">
                <img src="/static/images/drochilnya.png" alt="Дрочильня"/>
                </div>
                <span class="building__mobile__hint__value text__center">Дрочильня на игнатенко</span>
            </div>
        `)
    }

    const placemark = new ymaps.Placemark(
        position,
        {},
        {
            iconLayout: customLayout,
            iconShape: {
                type: 'Rectangle',
                coordinates: [[-100, -100], [100, 100]]
            },
            zIndex: 1000
        }
    )

    placemark.events.add('click', function (ymapsEvent) {
        if (isMobileDevice()) {
            const clickedPlacemark = ymapsEvent.get('target')

            if (clickedPlacemark.getOverlay) {
                clickedPlacemark.getOverlay().then(function (overlay) {
                    if (overlay && typeof overlay.getElement === 'function') {
                        const domElement = overlay.getElement()

                        const hintElement = domElement.querySelector('.building__mobile__hint')

                        if (!hintElement.classList.contains('active')) {
                            hintElement.classList.add('active')

                            hintElement.addEventListener('click', () => {
                                console.log(asidePanel)
                                asidePanel.classList.add('active')

                                asidePanelBlocks.forEach((asidePanelBlock) => {
                                    if (asidePanelBlock.classList.contains('selected__place__block')) {
                                        asidePanelBlock.classList.add('active')
                                        asidePanelBlock.querySelector('.aside__back__button').addEventListener('click', () => {
                                            asidePanel.classList.remove('active')
                                            if (asidePanelBlock.classList.contains('default__block') && !asidePanelBlock.classList.contains('active')) {
                                                asidePanelBlock.classList.add('active')
                                            } else {
                                                asidePanelBlock.classList.remove('active')
                                            }
                                        })
                                    } else {
                                        asidePanelBlock.classList.remove('active')
                                    }
                                })
                            })
                        } else {
                            console.log(asidePanel)
                            asidePanel.classList.add('active')

                            asidePanelBlocks.forEach((asidePanelBlock) => {
                                if (asidePanelBlock.classList.contains('selected__place__block')) {
                                    asidePanelBlock.classList.add('active')
                                    asidePanelBlock.querySelector('.aside__back__button').addEventListener('click', () => {
                                        asidePanel.classList.remove('active')
                                        if (asidePanelBlock.classList.contains('default__block') && !asidePanelBlock.classList.contains('active')) {
                                            asidePanelBlock.classList.add('active')
                                        } else {
                                            asidePanelBlock.classList.remove('active')
                                        }
                                    })
                                } else {
                                    asidePanelBlock.classList.remove('active')
                                }
                            })
                        }

                    } else {
                        console.error('Overlay does not have getElement method.')
                    }
                }).catch(function (error) {
                    console.error('Error while getting overlay:', error)
                })
            } else {
                console.error('getOverlay method is not available for this placemark.')
            }
        } else {

            asidePanelBlocks.forEach((asidePanelBlock) => {
                if (asidePanelBlock.classList.contains('selected__place__block')) {
                    asidePanelBlock.classList.add('active')
                    asidePanelBlock.querySelector('.aside__back__button').addEventListener('click', () => {
                        asidePanel.classList.remove('active')
                        if (asidePanelBlock.classList.contains('default__block') && !asidePanelBlock.classList.contains('active')) {
                            asidePanelBlock.classList.add('active')
                        } else {
                            asidePanelBlock.classList.remove('active')
                        }
                    })
                } else {
                    asidePanelBlock.classList.remove('active')
                }
            })

            asidePanel.classList.add('active')

            asidePanelBlocks.forEach((asidePanelBlock) => {
                if (asidePanelBlock.classList.contains('selected__place__block')) {
                    asidePanelBlock.classList.add('active')
                } else {
                    asidePanelBlock.classList.remove('active')
                }
            })
        }
    })

    map.geoObjects.add(placemark)

    placemark.getOverlay().then(function (overlay) {
        if (overlay && typeof overlay.getElement === 'function') {
            const domElement = overlay.getElement()

            if (domElement) {
                if (isMobileDevice()) {
                    const hintElement = domElement.querySelector('.building__mobile__hint')

                    hintElement.addEventListener('click', () => {
                        if (hintElement.classList.contains('active')) {

                            console.log(asidePanel)
                            hintElement.classList.remove('active')
                            asidePanel.classList.add('active')

                            asidePanelBlocks.forEach((asidePanelBlock) => {
                                if (asidePanelBlock.classList.contains('selected__place__block')) {
                                    asidePanelBlock.classList.add('active')
                                    asidePanelBlock.querySelector('.aside__back__button').addEventListener('click', () => {
                                        asidePanel.classList.remove('active')
                                        if (
                                            asidePanelBlock.classList.contains('default__block') &&
                                            !asidePanelBlock.classList.contains('active')
                                        ) {
                                            asidePanelBlock.classList.add('active')
                                        } else {
                                            asidePanelBlock.classList.remove('active')
                                        }
                                    })
                                } else {
                                    asidePanelBlock.classList.remove('active')
                                }
                            })

                        } else {
                            hintElement.classList.add('active')
                        }
                    })
                } else {
                    domElement.addEventListener('click', () => {
                        asidePanel.classList.add('active')

                        asidePanelBlocks.forEach((asidePanelBlock) => {
                            if (asidePanelBlock.classList.contains('selected__place__block')) {
                                asidePanelBlock.classList.add('active')
                                asidePanelBlock.querySelector('.aside__back__button').addEventListener('click', () => {
                                   
                                    asidePanelBlocks.forEach((panelBlock) => {
                                        if(panelBlock.classList.contains('default__block')) {
                                            panelBlock.classList.add('active')
                                        } else {
                                            panelBlock.classList.remove('active')
                                        }
                                    })

                                })
                            } else {
                                asidePanelBlock.classList.remove('active')
                            }
                        })
                    })
                }
            }
        } else {
            console.error('Overlay does not have getElement method.')
        }
    }).catch(function (error) {
        console.error('Error while getting overlay:', error)
    })
}