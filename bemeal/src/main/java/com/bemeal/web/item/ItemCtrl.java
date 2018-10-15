package com.bemeal.web.item;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ItemCtrl.class);
	@Autowired Item item;
	@Autowired ItemMapper itemMapper;
	@Autowired HashMap<String,Object> map;
	
	@GetMapping("/item/list/{option}")
	public @ResponseBody Map<String,Object> list(@PathVariable String option){
		map.clear();
		logger.info("넘어온 옵션 {}",option); // 평점,판매량,최신 등등의 옵션으로 해당 옵션의 아이템을 검색
		Function<String,ArrayList<Item>> f = x->{
			// DB가서 데이터 가져오기, 아래는 더미데이터용. 삭제될 코딩
			ArrayList<Item> temp = new ArrayList<>();
			for(int i=0;i<20;i++) {
				item = new Item();
				int n = ((int) (Math.random()*10))+1;
				item.setImage("/web/resources/img/cmm/image"+n+".jpg");
				item.setItemName("도시락"+n);
				temp.add(item);
			}
			// DB가서 데이터 가져오기 끝
			return temp;
		};
		map.put("option", option);
		map.put("list", f.apply(option));
		return map;
	}

}
