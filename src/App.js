import { api } from './api/api.js';
import SearchInput from "./compenents/SearchInput.js";
import SearchResult from "./compenents/SearchResult.js";
import ImageInfo from "./compenents/ImageInfo.js";

export default class App {

    data = []

    constructor($target) {
        this.$target = $target;

        this.searchInput = new SearchInput({
            $target,
            onSearch: keyword => {
                api.fetchCats(keyword).then(({ data }) => this.setState(data));
            }
        });

        this.searchResult = new SearchResult({
            $target,
            initialData: this.data,
            onClick: image => {
                this.imageInfo.setState({
                    visible: true,
                    image
                });
            }
        });

        this.imageInfo = new ImageInfo({
            $target,
            data: {
                visible: false,
                image: null
            }
        });
    }

    setState(nextData) {
        console.log(this);
        this.data = nextData;
        this.searchResult.setState(nextData);
    }
}
