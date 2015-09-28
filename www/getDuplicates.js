/**
 * Created by krishnas on 9/28/2015.
 */

(function(global, $, ko){

    var viewModel = function(){
            var that = this;

            this.inputString = ko.observable('');
            this.duplicateString = ko.observable('');
            this.getDupes = function(){
                if(!!input) {
                    return;
                }

                var result = '',
                    input = that.inputString(),
                    len = input.length,
                    prev = 0,
                    current = prev + 1;

                // time complexity: (-) n
                while(prev < len && current < len){
                    if(input.charCodeAt(prev) == input.charCodeAt(current)){
                        // we found a dupe, so add it to result.
                        result += input.charAt(prev);

                        // advance the prev pointer to the next non- dupe value
                        // NOTE: this loop runs only once for length N.
                        while(prev < len && input.charCodeAt(prev) == input.charCodeAt(current)){
                            prev += 1;
                        }
                        // at this point, we have prev pointer pointing to a non dupe value w.r.t to old value
                        // increment current pointer to the next
                        current = prev + 1;
                    } else {
                        prev += 1;
                        current = prev + 1;
                    }
                }

                result = result.length ? result : "No dupes found";

                that.duplicateString(result);
            }
        };

    ko.applyBindings(new viewModel(), $('#root')[0]);

})(window, window.$, window.ko);