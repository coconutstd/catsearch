export default class ImageInfo {
    $imageInfo = null;
    data = null;

    constructor({ $target, data }) {
        const $imageInfo = document.createElement("div");
        $imageInfo.setAttribute('tabindex', 0);
        $imageInfo.className = "ImageInfo";
        this.$imageInfo = $imageInfo;
        $target.appendChild($imageInfo);

        this.data = data;
        this.render();
        $imageInfo.addEventListener('click', this.onClick);
        $imageInfo.addEventListener('keydown', this.onKeyDown);
    }

    onClick(e) {
        const clickedClassName = e.target.className;
        if (
            clickedClassName === 'close' ||
            clickedClassName.indexOf('ImageInfo') !== -1
        ) {
            this.style.display = 'none';
        }
    }

    onKeyDown(e) {
        console.log(e);
        if(e.key === 'Escape') this.style.display = 'none';
    }

    setState(nextData) {
        this.data = nextData;
        this.render();
    }


    render() {
        if (this.data.visible) {
            const { name, url, temperament, origin } = this.data.image;

            this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
            this.$imageInfo.style.display = "block";
        } else {
            this.$imageInfo.style.display = "none";
        }
    }
}
