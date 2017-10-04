$(function(){
	$(window).load(function(){
		var taglive_json_url = "http://"+tglv_d+"/tglv_json/"+tglv_a+".json";
		$.getScript(taglive_json_url, function(){
			$("#taglive_next_button").click();
		});
	});
	taglive_page = 0;
	taglive_disp_num = 6;
	if (typeof(tglv_num) == "undefined") {} else { taglive_disp_num  = tglv_num; }
	$taglive_contents = $('#taglive_contents');
	$("#taglive_next_button").click(function(){
		for (var i = 0; i < taglive_data.length; i++) {
			if(i >= taglive_page * taglive_disp_num && i < (taglive_page + 1) * taglive_disp_num){

				var media_hdr = "";
				if      (taglive_data[i]['media'] == "instagram") { media_hdr = "inst" }
				else if (taglive_data[i]['media'] == "twitter")   { media_hdr = "twitter" }
				var tglv_err_img = "http://taglive.jp/appli/images/onerror.png";

				var html = "<div id='taglive_widget_post"+i+"' class='post'><div class='taglive_entry_content'><div class='taglive_entry_text'>";
				if(taglive_data[i]['photo'] == ""){
					html += "<div class='"+media_hdr+"_photo'></div>";
				} else {
					if(taglive_data[i]['video'] == "1"){
						html += "<div class='"+media_hdr+"_photo "+media_hdr+"_video' >";
						html += "<img onerror=\"this.src='"+tglv_err_img+"';\" src='" + taglive_data[i]['photo'] + "'></div>";
					} else {
						html += "<div class='"+media_hdr+"_photo'><img onerror=\"this.src='"+tglv_err_img+"';\" src='"+taglive_data[i]['photo']+"'></div>";
					}
				}
				html += "<div class='"+media_hdr+"_profile'><img width='40' onerror=\"this.src='"+tglv_err_img+"';\" src='"+taglive_data[i]['prof_img']+"'>";
				html += "<a href='"+taglive_data[i]['prof_link']+"'>"+taglive_data[i]['prof_name'] +"</a></div>";
				html += "<div class='"+media_hdr+"_message'>" + taglive_data[i]['message'] + "</div>";
				html += "<div class='"+media_hdr+"_link'><a href='"+taglive_data[i]['link']+"'>"+taglive_data[i]['date'] +"</a></div>";
				html += "</div></div></div>";

				$taglive_contents.append(html);
				if(i >= taglive_disp_num){
					$taglive_contents.masonry( 'appended', $('#taglive_widget_post'+i), true );
				}
				if(i == (taglive_data.length-1) ){
					$("#taglive_next_button").remove();
				}
			}
		}
		$taglive_contents.imagesLoaded(function(){
			$taglive_contents.masonry({
				itemSelector: '.post'
			});
		});
		if(taglive_page == 0){
			$('#taglive_contents').before('<div class="taglive_img_info"><a href="http://taglive.jp/info/" target="_blank"><img src="http://taglive.jp/appli/images/info.png" alt="掲載情報についてのお問い合わせ"></a></div>');
		}
		taglive_page = taglive_page + 1;

	});
});
