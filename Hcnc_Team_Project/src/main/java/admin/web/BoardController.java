package admin.web;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import admin.service.AdminService;
import admin.service.BoardService;

@Controller
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	@RequestMapping(value="/selectBoardCodeByAdmin.do")
	public NexacroResult selectBoardCodeByAdmin() {
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> selectBoardCodeByAdmin = boardService.selectBoardCodeByAdmin();
		result.addDataSet("ds_combo", selectBoardCodeByAdmin);
		return result;
	}
	
	@RequestMapping(value="/selectBoardByAdmin.do")
	public NexacroResult selectBoardByAdmin(@ParamDataSet(name = "ds_search", required = false)Map<String, Object> sortNumber) {
		NexacroResult result = new NexacroResult();
		
		System.out.println("강해란 바보" + sortNumber);
		List<Map<String, Object>> selectBoardByAdmin = boardService.selectBoardByAdmin(sortNumber);
		result.addDataSet("ds_list", selectBoardByAdmin);
		return result;
	}
	@RequestMapping(value="/selectBoardDetailByAdmin.do")
	public NexacroResult selectBoardDetailByAdmin(@ParamDataSet(name = "ds_search", required = false)Map<String, Object> params) {
		NexacroResult result = new NexacroResult();
		Map<String, Object> selectBoardDetailByAdmin = boardService.selectBoardDetailByAdmin(params);
		result.addDataSet("ds_detail", selectBoardDetailByAdmin);
		return result;
	}
	
	
	
	

}
