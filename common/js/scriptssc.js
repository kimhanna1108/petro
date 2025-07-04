var pclSchematics = {
    hotspots: function () {
        const hotspots = document.querySelectorAll(".hotspots > *"),
            productsContainer = document.querySelector(".panel-container"),
            products = document.querySelector(".product-list"),
            closeBtn = document.querySelector(".schematic-area .btn-close-panel");

        let bPanelVisible = false;
        let bInit = true;

        function allHotspots(vp) {
            let mobileViewport = vp.matches || false;

            hotspots.forEach(function (hs) {
                plotHotspots(hs, bInit, mobileViewport);
            });

            if (bInit == true)
                bInit = false;
        }

        function panelState(bShow) {
            let _show = (bShow == true ? true : false);

            if (_show == true)
                productsContainer.classList.remove("no-products");
            else {
                productsContainer.classList.add("no-products");

                //remove active state
                for (let hs of hotspots) {
                    hs.classList.remove("active");
                }
            }

            closeBtn.setAttribute("aria-expanded", _show.toString());
        }

        function bindClosePanel() {
            closeBtn.addEventListener("click", function (e) { panelState(false) }, false);
            closeBtn.addEventListener("keyup", function (e) { if (e.keyCode === 13) panelState(false) }, false);
        }

        function plotHotspots(el, bOnce, bMobVp) {
            let posX = (el.hasAttribute("data-posx") == true ? el.dataset.posx : null);
            let posXsm = (el.hasAttribute("data-posxsm") == true ? el.dataset.posxsm : null);
            let posY = (el.hasAttribute("data-posy") == true ? el.dataset.posy : null);

            //only show if X & Y coords exist
            if (posX && posY) {
                let _px = posX, // get X coord for desktop
                    _py = posY;

                if (bMobVp) // Get X coord (if mobile viewport)
                    _px = posXsm || posX;

                el.style.left = _px + "%";
                el.style.top = _py + "%";

                if (bOnce == true) {
                    // DO THIS ONLY ONCE
                    el.addEventListener("click", function (e) { attachProduct(e, this, bMobVp) }, false);
                    el.addEventListener("keyup", function (e) { if (e.keyCode === 13) attachProduct(e, this, bMobVp) }, false);
                }
            }
            else {
                el.style.display = "none";
            }
        }

        function attachProduct(ev, el, vpm) {
            // hide all products except target
            if (products.hasChildNodes()) {
                let children = products.querySelectorAll(".product-list-item");

                bPanelVisible = true;

                for (const c of children) {
                    c.hidden = true;
                }
            }

            let pId = (el.hasAttribute("data-productid") == true ? el.dataset.productid : null),
                target = products.querySelector('[data-productid="' + pId + '"]');

            //set hotspot to active
            for (const h of hotspots) {
                h.classList.remove("active");
            }
            el.classList.add("active");

            if (target) {
                //transition opacity 0 > 100 ?;
                if (target.hasAttribute("hidden")) target.removeAttribute("hidden");
            }

            if (bPanelVisible)
                panelState(true);

            if (vpm)
                document.getElementById("products").scrollIntoView();
        }

        //re-plot when viewport changes
        const viewportWidth = window.matchMedia(`(max-width: 991px)`);

        try {
            viewportWidth.addEventListener('change', (e) => { allHotspots(e) });
        }
        catch (e) {
            //Fallback for Safari < 14 and older browsers
            viewportWidth.addListener(allHotspots(e));
        }

        allHotspots(viewportWidth);
        bindClosePanel();
    }
};

document.addEventListener("DOMContentLoaded", pclSchematics.hotspots);