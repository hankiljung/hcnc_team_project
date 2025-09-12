(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Board_Detail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(2180,1010);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","73","44","1347","766",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","116","125","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상세보기");
            obj.set_font("normal 25pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","130","219","80","41",null,null,null,null,null,null,this);
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_taborder("2");
            obj.set_text("작성자");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","231","221","159","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","500","221","80","41",null,null,null,null,null,null,this);
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_taborder("4");
            obj.set_text("분류");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","860","222","80","41",null,null,null,null,null,null,this);
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_taborder("5");
            obj.set_text("작성일");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","991","224","159","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","140","310","80","41",null,null,null,null,null,null,this);
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_taborder("7");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","231","312","159","39",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","195","625","1015","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("FileDownload00");
            obj.set_font("normal 20pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00_00","193","685","1015","45",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("FileDownload00");
            obj.set_font("normal 20pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","170","380","1030","170",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00","610","224","159","39",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",2180,1010,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_detail","MEMBER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_01","value","ds_detail","INPUT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_02","value","ds_detail","POST_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit01","value","ds_detail","POST_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit00_02_00","value","ds_detail","BOARD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Board_Detail.xfdl", function() {
        this.Form_Board_Detail_onload = function(obj,e)
        {
        	 var boardIDX = this.parent.paramData.boardIdx;
            this.fn_boardDetail(boardIDX);
        };



        this.fn_boardDetail = function(boardIDX)
        {
            this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
            this.ds_search.setColumn(nRow, "POST_ID", boardIDX);

            var sId = "selectBoardDetailByAdmin";
            var sUrl = "svc::selectBoardDetailByAdmin.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_detail=ds_detail";
            var args = "";
            var cd = "fn_callback";

            this.transaction(sId, sUrl, inDs, outDs, args, cd);
        };

        this.fn_callback = function(svcID, errCD, errMSG)
        {
            if (errCD < 0)
            {
                this.alert("오류: " + errMSG);
                return;
            }

            switch (svcID)
            {
                case "selectBoardDetailByAdmin":
                    trace(this.ds_detail.saveXML());
                    break;
            }
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Board_Detail_onload,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("Form_Board_Detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
