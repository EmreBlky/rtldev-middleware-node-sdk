"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Record = (function () {
    function Record(data) {
        this.data = data;
    }
    Record.prototype.getData = function () {
        return this.data;
    };
    Record.prototype.getDataByKey = function (key) {
        if (this.hasData(key)) {
            return this.data[key];
        }
        return null;
    };
    Record.prototype.hasData = function (key) {
        return Object.prototype.hasOwnProperty.call(this.data, key);
    };
    return Record;
}());
exports.Record = Record;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlY29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBVUksZ0JBQW1CLElBQVM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQU1NLHdCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQU9NLDZCQUFZLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFPTyx3QkFBTyxHQUFmLFVBQWdCLEdBQVc7UUFDdkIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlY29yZCBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgUmVjb3JkIHtcbiAgICAvKipcbiAgICAgKiByb3cgZGF0YSBjb250YWluZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGRhdGE6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGRhdGEgZGF0YSBvYmplY3QgKHVzZSBjb2x1bW4gbmFtZXMgYXMgb2JqZWN0IGtleXMpXG4gICAgICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCByb3cgZGF0YVxuICAgICAqIEByZXR1cm5zIHJvdyBkYXRhXG4gICAgICovXG4gICAgcHVibGljIGdldERhdGEoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgcm93IGRhdGEgZm9yIGdpdmVuIGNvbHVtblxuICAgICAqIEBwYXJhbSBrZXkgY29sdW1uIG5hbWVcbiAgICAgKiBAcmV0dXJucyByb3cgZGF0YSBmb3IgZ2l2ZW4gY29sdW1uIG9yIG51bGwgaWYgY29sdW1uIGRvZXMgbm90IGV4aXN0XG4gICAgICovXG4gICAgcHVibGljIGdldERhdGFCeUtleShrZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgICAgICBpZiAodGhpcy5oYXNEYXRhKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVjayBpZiByZWNvcmQgaGFzIGRhdGEgZm9yIGdpdmVuIGNvbHVtblxuICAgICAqIEBwYXJhbSBrZXkgY29sdW1uIG5hbWVcbiAgICAgKiBAcmV0dXJucyBib29sZWFuIHJlc3VsdFxuICAgICAqL1xuICAgIHByaXZhdGUgaGFzRGF0YShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuZGF0YSwga2V5KTtcbiAgICB9XG59XG4iXX0=