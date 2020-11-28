export class FilterView {
    constructor() {
        this.SortBy = null;
        this.Search = null;
        this.MaxPrice = 0;
        this.MinPrice = 0;
    }
    SortBy: string;
    Search: string;
    MaxPrice: number;
    MinPrice: number;
}
