$(document).ready(function() { 
    
        	//Dashboard page
		    $("#dashboard-sub-header-container li").on("click", function() {
		    	     $("#dashboard-sub-header-container li, #dashboard-content-sidebar li").removeClass('dashboard-selected-item');
                    $(this).addClass('dashboard-selected-item');
		    });	 
             $("#dashboard-content-sidebar li").on("click", function() {
		    	     $("#dashboard-content-sidebar li").removeClass('dashboard-selected-item');
                    $(this).addClass('dashboard-selected-item');
		    });

             //agent vehicle add form
            $(".add-truck-form").colorbox({iframe:true, fastIframe:false, width:"65%", height:"75%", transition:"fade", scrolling   : false}); 

            $(".booked-status").on("change", function() {
                var bookedStatus = $(this).val();
                var clickedTruckNo = $(this).attr("id");
                if(bookedStatus == "completed"){
                     $("#delivered-goods-"+clickedTruckNo).css("background","#000000");
                  
                     return false;
                }
                else if(bookedStatus == "inprogress"){
                         $("#delivered-goods-"+clickedTruckNo).css("background","#576B89");
                         return false;
                }
            });

          //agent inquiry view details

          $(".agent-view-details,.dashboard-customer-add-details,.customer-inquiry-detials-popup").colorbox();
         
         //search journey date
         $("#journey-date,#search-load-journey-date,#search-vehicle-journey-date").datepicker({
             dateFormat: 'dd-M-yy',
             minDate : '0',
             maxDate: +10,
            
         });

    });
 

