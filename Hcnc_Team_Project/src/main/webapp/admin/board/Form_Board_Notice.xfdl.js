(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Board_Notice");
            this.set_titletext("New Form");
            this.set_color("blue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","83","60","717","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid blue");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","80","290","819","310",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/><Column size=\"128\"/><Column size=\"128\"/><Column size=\"128\"/><Column size=\"128\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"분류\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"bind:SORT_NUMBER\"/><Cell col=\"1\" text=\"bind:BOARD_NAME\"/><Cell col=\"2\" text=\"bind:POST_TITLE\"/><Cell col=\"3\" text=\"bind:MEMBER_ID\"/><Cell col=\"4\" text=\"bind:INPUT_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboBox00","120","123","118","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("BOARD_CODE");
            obj.set_datacolumn("BOARD_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","402","80","328","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","295","210","130","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","402","148","328","44",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","460","210","130","37",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","295","90","76","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("제목");
            obj.set_font("normal 20pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","284","146","76","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("작성자");
            obj.set_font("normal 20pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","740","629","170","51",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("글작성");
            obj.set_font("normal 20pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ComboBox00","value","ds_search","SORT_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00","value","ds_search","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_00","value","ds_search","POST_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Board_Notice.xfdl", function() {
        this.Form_Board_Notice_onload = function(obj,e)
        {
        	this.fn_selectBoardByAdmin();
        	this.fn_selectBoardCodeByAdmin()
        };

        this.Button00_onclick = function(obj, e)
        {
            this.fn_selectBoardByAdmin()

        }


        this.fn_selectBoardCodeByAdmin = function(){
        		var strSvcID = "selectBoardCodeByAdmin";        //트랜잭션 아이디
        		var strURL = "svc::/selectBoardCodeByAdmin.do";  // url controller에서 받을 주소
        		var strInDatasets = "";							//프론트에서 서버로 보내는데이터
        		var strOutDatasets = "ds_combo=ds_combo";		//서버에서 프론트로 보내는 데이터
        		var strArg = "";
        		var callBack = "fn_callBack";
        		var inAsync = true;

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync)

        	}

        	this.fn_selectBoardByAdmin = function() {

            if (this.ds_search.getRowCount() == 0) {
                this.ds_search.addRow();
            }

            this.ds_search.setColumn(0, "SORT_NUMBER", this.ComboBox00.value);
            this.ds_search.setColumn(0, "POST_TITLE", this.Edit00_00.value); // 제목 검색어
            this.ds_search.setColumn(0, "MEMBER_ID", this.Edit00.value);

            var strSvcID = "selectBoardByAdmin";
            var strURL = "svc::/selectBoardByAdmin.do";
            var strInDatasets = "ds_search=ds_search";
            var strOutDatasets = "ds_list=ds_list";
            var strArg = "";
            var callBack = "fn_callBack";
            var inAsync = true;

            this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        }



        	this.fn_callBack = function(svcID,errorCode, errorMsg){
        	if (errorCode == -1)
        	{
        		this.alert(errorMsg)
        	}
        	switch(svcID){
        	case "selectBoardCodeByAdmin":
        	trace(this.ds_combo.saveXML());
        	break;

        	case "selectBoardByAdmin":

        	break;

        	case "searchBoard":

                    break;
        		}
        	}




        this.Grid00_oncellclick = function(obj,e)
        {
        	var boardIDX = this.ds_list.getColumn(e.row, "POST_ID");
            var frame = this.getOwnerFrame();
            frame.paramData = { boardIdx: boardIDX };
            frame.set_formurl("board::Form_Board_Detail.xfdl");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Board_Notice_onload,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.ComboBox00.addEventHandler("onitemchanged",this.ComboBox00_onitemchanged,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Edit00_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("Form_Board_Notice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
