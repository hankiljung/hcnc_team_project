package admin.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.AdminService;
import admin.service.BoardService;

@Controller
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	@RequestMapping(value="/selectBoardCodeByAdmin.do")
	public NexacroResult selectBoardCodeByAdmin(
	/*
	 * @ParamDataSet(name="ds_data", required = false) Map<String, Object> ds_data
	 */
			) {
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> selectBoardCodeByAdmin = boardService.selectBoardCodeByAdmin();
;
		result.addDataSet("ds_list", selectBoardCodeByAdmin);
		return result;
	}
	


}
