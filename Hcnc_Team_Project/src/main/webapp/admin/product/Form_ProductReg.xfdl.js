(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductReg");
            this.set_titletext("상품등록");
            this.set_background("#f4f7fe");
            this.getSetter("format").set("#00,000,000");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,2070);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("categories", this);
            obj.set_url("http://localhost:8080/selectProductCategoryListByAdmin.do");
            obj._setContents([
            	{
            		"sortNumber" : 0,
            		"mainCateNm" : "필기구",
            		"isActive" : "Y",
            		"mainCateId" : 3,
            		"subCategories" : [
            			{
            				"subCateId" : 7,
            				"subCateNm" : "볼펜88",
            				"sortNumber" : 1,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 17,
            				"subCateNm" : "몽땅연필",
            				"sortNumber" : 2,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 18,
            				"subCateNm" : "형광펜",
            				"sortNumber" : 3,
            				"isActive" : "Y"
            			}
            		]
            	},
            	{
            		"sortNumber" : 1,
            		"mainCateNm" : "문구류",
            		"isActive" : "Y",
            		"mainCateId" : 1,
            		"subCategories" : [
            			{
            				"subCateId" : 5,
            				"subCateNm" : "볼펜",
            				"sortNumber" : 0,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 1,
            				"subCateNm" : "필기류",
            				"sortNumber" : 1,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 2,
            				"subCateNm" : "노트류",
            				"sortNumber" : 2,
            				"isActive" : "Y"
            			}
            		]
            	},
            	{
            		"sortNumber" : 2,
            		"mainCateNm" : "사무용품",
            		"isActive" : "Y",
            		"mainCateId" : 2,
            		"subCategories" : [
            			{
            				"subCateId" : 3,
            				"subCateNm" : "파일/바인더",
            				"sortNumber" : 1,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 4,
            				"subCateNm" : "책상정리용품",
            				"sortNumber" : 2,
            				"isActive" : "Y"
            			}
            		]
            	},
            	{
            		"sortNumber" : 2,
            		"mainCateNm" : "기타",
            		"isActive" : "Y",
            		"mainCateId" : 5,
            		"subCategories" : [
            			{
            				"subCateId" : 9,
            				"subCateNm" : "기타하위분류",
            				"sortNumber" : 1,
            				"isActive" : "Y"
            			}
            		]
            	},
            	{
            		"sortNumber" : 3,
            		"mainCateNm" : "공책류",
            		"isActive" : "Y",
            		"mainCateId" : 4,
            		"subCategories" : [
            			{
            				"subCateId" : 6,
            				"subCateNm" : "연습장",
            				"sortNumber" : 1,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 8,
            				"subCateNm" : "연습장2",
            				"sortNumber" : 2,
            				"isActive" : "Y"
            			}
            		]
            	},
            	{
            		"sortNumber" : 4,
            		"mainCateNm" : "사무기기",
            		"isActive" : "Y",
            		"mainCateId" : 6,
            		"subCategories" : [
            			{
            				"subCateId" : 10,
            				"subCateNm" : "노트북",
            				"sortNumber" : 1,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 11,
            				"subCateNm" : "마우스",
            				"sortNumber" : 2,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 12,
            				"subCateNm" : "빔프로젝터",
            				"sortNumber" : 3,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 13,
            				"subCateNm" : "키보드",
            				"sortNumber" : 4,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 14,
            				"subCateNm" : "노트북충전기",
            				"sortNumber" : 5,
            				"isActive" : "Y"
            			}
            		]
            	},
            	{
            		"sortNumber" : 5,
            		"mainCateNm" : "잡기류",
            		"isActive" : "Y",
            		"mainCateId" : 7,
            		"subCategories" : [
            			{
            				"subCateId" : 15,
            				"subCateNm" : "텀블러",
            				"sortNumber" : 1,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 19,
            				"subCateNm" : "포스트잇",
            				"sortNumber" : 2,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 21,
            				"subCateNm" : "화분",
            				"sortNumber" : 3,
            				"isActive" : "Y"
            			}
            		]
            	},
            	{
            		"sortNumber" : 6,
            		"mainCateNm" : "사무악세사리",
            		"isActive" : "Y",
            		"mainCateId" : 8,
            		"subCategories" : [
            			{
            				"subCateId" : 20,
            				"subCateNm" : "부품1",
            				"sortNumber" : 1,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 22,
            				"subCateNm" : "악세1",
            				"sortNumber" : 2,
            				"isActive" : "Y"
            			}
            		]
            	},
            	{
            		"sortNumber" : 8,
            		"mainCateNm" : "대분류추가야2ㅇ",
            		"isActive" : "Y",
            		"mainCateId" : 14,
            		"subCategories" : [
            			{
            				"subCateId" : 24,
            				"subCateNm" : "하위2",
            				"sortNumber" : 1,
            				"isActive" : "Y"
            			},
            			{
            				"subCateId" : 25,
            				"subCateNm" : "추가테스트",
            				"sortNumber" : 2,
            				"isActive" : "Y"
            			}
            		]
            	}
            ]);
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_display", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\"/><Column id=\"name\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"name\">진열함</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">진열안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sale", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\"/><Column id=\"name\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"code\">normal</Col><Col id=\"name\">기본</Col></Row><Row><Col id=\"code\">new</Col><Col id=\"name\">신규</Col></Row><Row><Col id=\"code\">hot</Col><Col id=\"name\">인기</Col></Row><Row><Col id=\"code\">recommend</Col><Col id=\"name\">추천</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cate_main", this);
            obj._setContents("<ColumnInfo><Column id=\"mainCateId\" type=\"STRING\" size=\"256\"/><Column id=\"mainCateNm\" type=\"STRING\" size=\"256\"/><Column id=\"subCategories\" type=\"STRING\" size=\"512\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cate_sub", this);
            obj._setContents("<ColumnInfo><Column id=\"subCateId\" type=\"STRING\"/><Column id=\"subCateNm\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("createStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_image", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("preview", this);
            obj._setContents("<ColumnInfo><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileUrl\" type=\"STRING\" size=\"256\"/><Column id=\"exist\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_preview_origin", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete_image", this);
            obj._setContents("<ColumnInfo><Column id=\"fileUrl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"COST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CATE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("productImage", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("productImageTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","10","220","40",null,null,null,null,null,null,this);
            obj.set_text("상품관리 || 상품등록");
            obj.set_font("bold 16pt \'Gulim\'");
            obj.set_color("#111111");
            this.addChild(obj.name, obj);

            obj = new Static("box_display","20","60","1240","40",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0,1px solid #e0e0e0,");
            obj.set_borderRadius("0px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("box_display00","20","98","1240","40",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0,1px solid #e0e0e0");
            obj.set_borderRadius("0px");
            obj.set_text("");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("box_display00_00","20","137","1240","40",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0,1px solid #e0e0e0");
            obj.set_borderRadius("0px");
            obj.set_text("");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_01","20","137","120","40",null,null,null,null,null,null,this);
            obj.set_text("판매상태");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("37");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_display","156","87","195","64",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_display");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_direction("vertical");
            obj.set_text("진열함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_sale","156","125","394","64",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_sale");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_direction("vertical");
            obj.set_text("기본");
            obj.set_value("nomal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("box_category","20","176","1240","124",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("0px");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_maincate","160","225","200","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_cate_main");
            obj.set_codecolumn("mainCateId");
            obj.set_datacolumn("mainCateNm");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_subcate","160","263","200","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_cate_sub");
            obj.set_codecolumn("subCateId");
            obj.set_datacolumn("subCateNm");
            this.addChild(obj.name, obj);

            obj = new Static("box_basic","20","300","1240","240",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("0px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","150","355","400","30",null,null,null,null,null,null,this);
            obj.set_displaynulltext("상품명 입력");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","150","401","400","30",null,null,null,null,null,null,this);
            obj.set_displaynulltext("ex) PRO001");
            obj.set_maxlength("50");
            obj.set_text("자동생성");
            this.addChild(obj.name, obj);

            obj = new Static("box_saleinfo","20","540","1240","159",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_price","150","598","0","0",null,null,null,null,null,null,this);
            obj.set_text("판매가");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_price","160","589","200","30",null,null,null,null,null,null,this);
            obj.set_textAlign("right");
            obj.set_displaynulltext("0");
            obj.getSetter("inputtype").set("number");
            obj.set_format("###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("sta_supply","430","608","0","0",null,null,null,null,null,null,this);
            obj.set_text("공급가");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_costprice","636","589","200","30",null,null,null,null,null,null,this);
            obj.set_textAlign("right");
            obj.set_displaynulltext("0");
            obj.set_format("###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","935","1740","150","40",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","1105","1740","150","40",null,null,null,null,null,null,this);
            obj.set_text("취소");
            obj.set_background("#444444");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00","20","98","120","40",null,null,null,null,null,null,this);
            obj.set_text("진열상태");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("35");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_00","20","60","1240","38",null,null,null,null,null,null,this);
            obj.set_text("표시 설정");
            obj.set_font("normal 700 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("36");
            obj.set_textAlign("left");
            obj.set_border("1px solid #e0e0e0");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_content","150","450","850","80",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_displaynulltext("상품 단순설명");
            obj.set_maxlength("40");
            obj.set_text("자동생성");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_00_00","20","176","1240","41",null,null,null,null,null,null,this);
            obj.set_text("상품 분류");
            obj.set_font("normal 700 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("29");
            obj.set_textAlign("left");
            obj.set_border("1px solid #e0e0e0");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_02","20","217","120","44",null,null,null,null,null,null,this);
            obj.set_text("대분류");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("29");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_01_00","20","260","120","40",null,null,null,null,null,null,this);
            obj.set_text("중분류");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("30");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_00_00_00","20","300","1240","40",null,null,null,null,null,null,this);
            obj.set_text("기본 정보");
            obj.set_font("normal 700 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("31");
            obj.set_textAlign("left");
            obj.set_border("1px solid #e0e0e0");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_02_00","20","340","120","51",null,null,null,null,null,null,this);
            obj.set_text("상품명");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("31");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_01_00_00","20","390","120","49",null,null,null,null,null,null,this);
            obj.set_text("상품코드");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("32");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_01_00_00_00","20","425","120","115",null,null,null,null,null,null,this);
            obj.set_text("상품설명");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("30");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_00_00_00_00","20","540","1240","39",null,null,null,null,null,null,this);
            obj.set_text("판매 정보");
            obj.set_font("normal 700 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("31");
            obj.set_textAlign("left");
            obj.set_border("1px solid #e0e0e0");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_02_00_00","20","580","120","40",null,null,null,null,null,null,this);
            obj.set_text("판매가");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("31");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_01_00_00_01","502","623","120","49",null,null,null,null,null,null,this);
            obj.set_text("수량");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("32");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_01_00_00_01_00","20","619","120","49",null,null,null,null,null,null,this);
            obj.set_text("무게");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("33");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_weight","160","630","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_textAlign("right");
            obj.set_displaynulltext("0");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","364","592","52","29",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","840","591","52","29",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","364","632","52","29",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("kg");
            this.addChild(obj.name, obj);

            obj = new Static("box_saleinfo00","20","700","1240","550",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("0px");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_00_00_00_00_00","20","670","1240","29",null,null,null,null,null,null,this);
            obj.set_text("상품 게시글");
            obj.set_font("normal 700 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("39");
            obj.set_textAlign("left");
            obj.set_border("1px solid #e0e0e0");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_postContent","20","700","1240","510",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("box_saleinfo01","21","1251","1240","350",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e0e0e0");
            obj.set_borderRadius("0px");
            obj.set_taborder("41");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_00_00_00_00_00_00","21","1251","1240","59",null,null,null,null,null,null,this);
            obj.set_text("이미지 정보");
            obj.set_font("normal 700 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("45");
            obj.set_textAlign("left");
            obj.set_border("1px solid #e0e0e0");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_02_00_00_00","23","1320","120","290",null,null,null,null,null,null,this);
            obj.set_text("이미지등록");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("45");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_display00_01_00_00_01_01","500","579","120","49",null,null,null,null,null,null,this);
            obj.set_text("원가");
            obj.set_font("normal 500 10pt/normal \"Gulim\"");
            obj.set_color("#222222");
            obj.set_taborder("45");
            obj.set_textAlign("center");
            obj.set_background("#FAFAFB");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_stock","637","635","200","30",null,null,null,null,null,null,this);
            obj.set_textAlign("right");
            obj.set_taborder("46");
            obj.set_displaynulltext("0");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","841","637","52","29",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("개");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectFile","1115","1258","140","44",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("파일찾기");
            obj.set_background("#135dae");
            obj.set_border("0px none");
            obj.set_borderRadius("5px");
            obj.set_color("#ffffff");
            obj.set_font("normal 10pt/normal \"Noto Sans KR Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","130","1273","276","20",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("* 최대 4개 첨부가능");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,2070,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_maincate","value","ds_cate_main","mainCateId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_subcate","value","ds_cate_sub","subCateId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_ProductReg.xfdl","common::common.xjs");
        this.registerScript("Form_ProductReg.xfdl", function() {
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;
        var mode = "";
        var productId;
        this.Form_ProductReg_onload = function(obj,e)
        {
        	var ownerFrame = this.getOwnerFrame();
        	productId = ownerFrame.arguments["productId"];
        	if(productId == -1){
        		mode = "create";
        	} else {
        		mode = "update"
        		this.sta_display00_01_00_00_01.resize(0,0);
        		this.edt_stock.resize(0,0);
        		this.Static00_00_01.resize(0,0);
        	}
        	trace(mode);
        	this.categories.request("SEARCH", "GET", "http://localhost:8080/selectProductCategoryListByAdmin.do?time=" + new Date().getTime());
            this.setMemberId();
        	var sUrl = "http://localhost:8080/ckedit.do;";
        	this.web_postContent.set_url(sUrl);
        };

        this.updateInit = function(){
        	var mainIndex = this.ds_cate_main.findRow("mainCateId",this.ds_product.getColumn(0,"MAIN_CATE_ID"));
        	trace(mainIndex);
        	this.cmb_maincate.set_index(mainIndex);
        	this.subCateSolt(mainIndex,this.ds_product.getColumn(0,"SUB_CATE_ID"));

        	// this.ds_product.setColumn(nRow, "SUB_CATE_ID", this.cmb_subcate.value);
        	// 카테고리 선택, 이미지 불러오기
        	this.edt_name.set_value(this.ds_product.getColumn(0,"PRODUCT_NAME"));
        	this.edt_code.set_value(this.ds_product.getColumn(0,"PRODUCT_CODE"));
        	this.edt_content.set_value(this.ds_product.getColumn(0,"PRODUCT_CONTENT"));
        	this.edt_price.set_value(this.ds_product.getColumn(0,"PRODUCT_PRICE"));
        	this.edt_costprice.set_value(this.ds_product.getColumn(0,"COST_PRICE"));
        	this.edt_weight.set_value(this.ds_product.getColumn(0,"PRODUCT_WEIGHT"));
        	this.rdo_display.set_value(this.ds_product.getColumn(0,"IS_VISIBLE"));
        	// this.setEditorContent(this.ds_product.getColumn(0,"DETAIL_DESCRIPTION"));
        	this.rdo_sale.set_value(this.ds_product.getColumn(0,"PRODUCT_TYPE"));
        	this.edt_stock.set_value("0");
        	this.fn_allRemoveImageViewer();
        	this.ds_delete_image.clearData();

        	var cnt = this.ds_preview_origin.getRowCount();
        	if(cnt != 0){
        		for(var i = 0; i < cnt; i++){
        			var url = this.ds_preview_origin.getColumn(i,"IMAGE_URL");
        			var preRow = this.preview.addRow();
        			this.fn_createNewImageViewer(preRow,url,true);
        		}

        	}

        }

        // 저장 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	function emptyCheck(value,errorMsg) {
        		if(value == null || value == ""){
        			this.alert(errorMsg);
        			return true;
        		}
        		return false;
        	}
        	if(emptyCheck(this.cmb_subcate.value, "중분류를 선택해주세요."))return;
        	if(emptyCheck(this.edt_name.value,"상품명을 입력하세요."))return;
        	if(emptyCheck(this.edt_code.value,"상품 코드를 입력하세요."))return;
        	if(emptyCheck(this.edt_content.value,"상품 상세설명을 입력하세요."))return;
        	if(emptyCheck(this.edt_price.value,"판매가를 입력하세요."))return;
        	if(emptyCheck(this.edt_costprice.value,"원가를 입력하세요."))return;
        	if(emptyCheck(this.edt_weight.value,"상품무게를 입력하세요."))return;
        	if((mode == "create") && emptyCheck(this.edt_stock.value,"수량을 입력하세요."))return;


            // CKEditor 본문 가져오기


            // ds_product 구성 (단일행)
            this.ds_product.clearData();
            var nRow = this.ds_product.addRow();
        	this.ds_product.setColumn(nRow, "PRODUCT_ID", productId);
        	this.ds_product.setColumn(nRow, "SUB_CATE_ID", this.cmb_subcate.value);
        	this.ds_product.setColumn(nRow, "PRODUCT_NAME", this.edt_name.value);
        	this.ds_product.setColumn(nRow, "PRODUCT_CODE", this.edt_code.value);
        	this.ds_product.setColumn(nRow, "PRODUCT_CONTENT", this.edt_content.value);
        	this.ds_product.setColumn(nRow, "PRODUCT_PRICE", this.edt_price.value);
        	this.ds_product.setColumn(nRow, "COST_PRICE", this.edt_costprice.value);
        	this.ds_product.setColumn(nRow, "PRODUCT_WEIGHT", this.edt_weight.value);
        	this.ds_product.setColumn(nRow, "IS_VISIBLE", this.rdo_display.value);
        	//this.ds_product.a(nRow, "INPUT_ID", "admin");
        	this.ds_product.setColumn(nRow, "SORT_NUMBER", 0);
        	var desc = this.getEditorContent();
        	this.ds_product.addColumn("DETAIL_DESCRIPTION","string");
        	this.ds_product.setColumn(nRow, "DETAIL_DESCRIPTION", desc);
            this.ds_product.setColumn(nRow, "PRODUCT_TYPE", this.rdo_sale.value);
        	this.ds_product.setColumn(nRow, "STOCK", this.edt_stock.value);

        	trace(this.ds_product.saveXML());

            // 트랜잭션 호출
        	var strSvcId = "";
        	var strUrl = "";
        	var strIn = "";
        	if(mode == "create"){
        		strSvcId = "insertProductCreateByAdmin";
        		strUrl = "svc::insertProductCreateByAdmin.do?time=" + new Date().getTime()
        		strIn  = "ds_product=ds_product preview=preview";
        	} else {
        		strSvcId = "updateProductCreateByAdmin";
        		strUrl = "svc::updateProductCreateByAdmin.do?time=" + new Date().getTime();
        		strIn  = "ds_product=ds_product preview=preview ds_preview_origin=ds_preview_origin ds_delete_image=ds_delete_image";
        	}
            // IN/OUT Dataset 매핑
            var strOut = "createStatus=createStatus";

            var strArg = "";
            var callBack = "fn_callback";
            var bAsync = true;

            this.transaction(strSvcId, strUrl, strIn, strOut, strArg, callBack, bAsync);
        };

        // 취소 버튼
        this.btn_cancel_onclick = function(obj,e) {
        	this.getOwnerFrame().set_formurl("product::Form_Product.xfdl");
        };

        // 이미지등록버튼
        this.btn_selectFile_onclick = function(obj,e)
        {
        	var previewRowCount = this.preview.getRowCount();
        	if(previewRowCount >= 4){
        		this.alert("이미지는 4개까지 등록가능합니다");
        		return;
        	}
        	this.productImage.open('nexacro17', 1);
        };

        // 콜백
        this.fn_callback = function(svcID, errCode, errMsg) {
            if (errCode < 0) { this.alert("오류: " + errMsg); return; }

            switch(svcID){
        	case "selectTargetProductByAdmin":
        		this.updateInit();
        	break;
        	case "insertProductCreateByAdmin":
        		var status = this.createStatus.getColumn(0,"status");
        		if (status == "SUCCESS"){
        			this.alert("상품등록이 완료되었습니다");
        			this.getOwnerFrame().set_formurl("product::Form_Product.xfdl");
        		}
        	break;
        	case "updateProductCreateByAdmin":
        		var status = this.createStatus.getColumn(0,"status");
        		trace(status);
        		if (status == "SUCCESS"){
        			this.alert("상품이 수정되었습니다");
        			this.createStatus.clearData();
        			this.selectProductByAdmin(productId);
        		}
        	break;
            }
        };

        // 대분류 로직
        this.categoriesJsonSuccess = function(obj,e)
        {
        	var result = this.categories.getResponse();
        	var parseRes = JSON.parse(result);
        	parseRes.forEach(function(res) {
            var target = this.ds_cate_main;
            var rowIndex = target.addRow();

            target.setColumn(rowIndex, "mainCateId", res.mainCateId);
            target.setColumn(rowIndex, "mainCateNm", res.mainCateNm);
            target.setColumn(rowIndex, "isActive", res.isActive);
            target.setColumn(rowIndex, "sortNumber", res.sortNumber);

            var subCategoriesJson = JSON.stringify(res.subCategories);
            target.setColumn(rowIndex, "subCategories", subCategoriesJson);

        	}, this);

        	if(mode == "create"){
        		this.cmb_maincate.set_index(0);
        		this.subCateSolt(0,0);
        	}
        	if(mode == "update"){
        		trace("JSON IN PRODUCT_ID= "+productId);
        		this.selectProductByAdmin(productId);
        	}
        };
        // 중분류 로직
        this.cmb_maincate_onitemchanged = function(obj,e)
        {
        	this.subCateSolt(e.postindex);
        };

        this.subCateSolt = function(index,subId){
        	var selectIndex = index;
        	var sub = this.ds_cate_main.getColumn(selectIndex,"subCategories");
        	var parseRes = JSON.parse(sub);
        	var target = this.ds_cate_sub;
        	target.clearData();
        	var setIndex = 0;
        	parseRes.forEach(function(res) {
            var rowIndex = target.addRow();
        	if(res.subCateId == subId){
        		setIndex = rowIndex;
        	}
            target.setColumn(rowIndex, "subCateId", res.subCateId);
            target.setColumn(rowIndex, "subCateNm", res.subCateNm);
        	}, this);
        	this.cmb_subcate.set_index(setIndex);
        }

        this.selectProductByAdmin = function(productId){
        	this.gfn_transction(
            "selectTargetProductByAdmin",
            "selectTargetProductByAdmin.do", // 캐시 방지용 파라미터 추가
            "",
            "ds_product=ds_product ds_preview_origin=ds_preview_origin",
            "productId="+productId
        	);
        }

        ////////// CK EDITOR ///////////

        // 사용자 ID 설정
        this.setMemberId = function()
        {
            // 전역변수에서 USER_ID 가져오기 (전역변수 이름에 따라 수정)
            var sUserId = nexacro.getApplication().gds_adminInfo.getColumn(0, "MEMBER_ID"); // 또는 gds_user.getColumn(0, "USER_ID") 등


            if(sUserId) { //전역변수에서 받아온 내용이 있으면 넣어주고 아니면 예외 trace
        		if(mode == "create"){
        			this.ds_product.setColumn(0, "INPUT_ID", sUserId);
        		} else {
        			this.ds_product.setColumn(0, "UPDATE_ID", sUserId);
        		}

                trace("사용자 ID 설정: " + sUserId);
            } else {
                trace("사용자 ID를 가져올 수 없습니다.");
                // 필요시 로그인 페이지로 이동하거나 오류 처리
            }
        };

        // 웹브라우저 로드 완료 후 실행
        this.web_postContent_onloadcompleted = function(obj,e)
        {
            trace("에디터 로드 완료");
            this.setTimer(1, 1000);
        };

        // 타이머 이벤트
        this.ProductReg_ontimer = function(obj,e)
        {
            if(e.timerid == 1) {
                this.killTimer(1);
                trace("에디터 준비 완료");

                // 초기 메시지 설정
        		if(mode == "create"){
        			this.setEditorContent("<p>내용을 입력해주세요.</p>");
        		} else {
        			this.setEditorContent(this.ds_product.getColumn(0,"DETAIL_DESCRIPTION"));
        		}

            }
        };

        this.getEditorContent = function()
        {
            try {
                var sContent = this.web_postContent.callMethod("getEditorContent", "");

                trace("=== 에디터 내용 디버깅 ===");
                trace("가져온 내용: " + sContent);
                trace("내용 타입: " + typeof sContent);

                if(!sContent || sContent === "undefined" || sContent === "null" || sContent === null) {
                    return "";
                }

                return String(sContent);

            } catch(e) {
                trace("에디터 내용 가져오기 실패: " + e.message);
                return "";
            }
        };

        // 에디터 내용 설정
        this.setEditorContent = function(sContent)
        {
            try {
                if(!sContent) {
                    sContent = "";
                }

                var result = this.web_postContent.callMethod("setEditorContent", sContent);
                trace("에디터 내용 설정 결과: " + result);

            } catch(e) {
                trace("에디터 내용 설정 실패: " + e.message);
            }
        };

        // 에디터 준비 상태 확인
        this.isEditorReady = function()
        {
            try {
                var result = this.web_postContent.callMethod("isEditorReady", "");
                return result === true || result === "true";
            } catch(e) {
                trace("에디터 준비 상태 확인 실패: " + e.message);
                return false;
            }
        };
        // 파일 시작!
        this.Button00_onclick = function(obj,e)
        {
        	this.productImage.open('nexacro17', FileDialog.LOAD);
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	var ext = e.virtualfiles[0].filename.split('.').pop().toLowerCase();
                var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
                if (allowedExtensions.indexOf(ext) === -1) {
                    alert("이미지 파일만 업로드 가능합니다. (jpg, jpeg, png, gif)");
                    return;
                }
        	this.productImageTransfer.addFile("file",e.virtualfiles[0]);
        	this.productImageTransfer.upload('http://localhost:8080/previewProductCreateByAdmin.do');
        };

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {

        	var imageUrl = e.datasets[0]._rawRecords[0][0];
        	var nRow = this.preview.addRow();
        	trace("생성",nRow);
        	this.fn_createNewImageViewer(nRow,imageUrl,false);
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        	trace(e.statuscode);
        };

        this.fn_createNewImageViewer = function(rowIndex, imageUrl, exist)
        {
            try {
                var imageViewerId = "ImageViewer_" + rowIndex + "_" + Date.now();
                var newImageViewer = new ImageViewer();

                // 위치 계산 (4열 그리드 형태로 배치)
                var baseLeft = 240;   // 시작 X 좌표
                var baseTop = 1356;   // 시작 Y 좌표
                var width = 219;      // ImageViewer 너비
                var height = 214;     // ImageViewer 높이
                var spacing = 15;     // 간격

                var col = rowIndex;  // 4열로 배치
                var row = rowIndex; //Math.floor(rowIndex / 4);

                var left = baseLeft + col * (width + spacing);
                var top = baseTop + row * (height + spacing);
                trace(left);
                // ImageViewer 초기화
                newImageViewer.init(
                    imageViewerId,  // ID
                    left,           // left
                    baseTop,            // top
                    width,          // width
                    height          // height
                );

                // ImageViewer 속성 설정
                newImageViewer.set_image(imageUrl);
                newImageViewer.set_stretch("fit");
                newImageViewer.set_imagealign("center");
                newImageViewer.set_cursor("pointer");


                // 클릭 이벤트 - 이미지 삭제
                newImageViewer.addEventHandler("onclick", function(obj, e) {
                    var result = confirm("이 이미지를 삭제하시겠습니까?");
                    if (result) {
                        this.fn_removeImageViewer(imageViewerId);
                    }
                }.bind(this));


                // Form에 ImageViewer 추가
                this.addChild(imageViewerId, newImageViewer);

                // 화면에 표시
                newImageViewer.show();

                // Dataset에 ViewerID 저장 (나중에 참조용)
                this.preview.setColumn(rowIndex, "fileName", imageViewerId);
        		this.preview.setColumn(rowIndex, "fileUrl", imageUrl);
        		this.preview.setColumn(rowIndex, "exist", exist);


                trace("ImageViewer 생성 완료: " + imageViewerId + " at (" + left + ", " + top + ")");

                // Form의 스크롤 영역 조정 (이미지가 많아지면)
                //this.fn_adjustFormSize(row);

            } catch (ex) {
                trace("ImageViewer 생성 오류: " + ex.message);
            }
        };

        // ImageViewer 삭제
        this.fn_removeImageViewer = function(viewerId)
        {
            try {
                // ImageViewer 컴포넌트 제거
                if (this.components[viewerId]) {
                    this.removeChild(viewerId);
                    trace("ImageViewer 삭제: " + viewerId);
                }

                // Dataset에서 해당 행 삭제
        		var target = this.preview.findRow("fileName",viewerId);
        		var isExist = this.preview.getColumn(target,"exist");
        		if(isExist){
        			var deleteRow = this.ds_delete_image.addRow();
        			this.ds_delete_image.setColumn(deleteRow,"fileUrl",this.preview.getColumn(target,"fileUrl"));
        		}
        		this.preview.deleteRow(target);

                // 나머지 ImageViewer들 위치 재조정
                this.fn_rearrangeImageViewers();

                alert("이미지가 삭제되었습니다.");

            } catch (ex) {
                trace("ImageViewer 삭제 오류: " + ex.message);
            }
        };

        // ImageViewer 삭제
        this.fn_allRemoveImageViewer = function()
        {
        	var cnt = this.preview.getRowCount();
        	if (cnt > 0){
        		for(var i =0; i < cnt; i++){
        			var delId = this.preview.getColumn(i,"fileName");
        			this.removeChild(delId);
        		}
        		this.preview.clearData();
        	}
        };
        // 삭제 후 재배치
        this.fn_rearrangeImageViewers = function()
        {
            try {
                var baseLeft = 240;
                var baseTop = 1356;
                var width = 219;
                var height = 214;
                var spacing = 15;

                var rowCount = this.preview.getRowCount();
        		trace("재배치"+rowCount);
                for (var i = 0; i < rowCount; i++) {
                    var viewerId = this.preview.getColumn(i, "fileName");
                    var comp = this.components[viewerId];
                    if (comp) {
        				//var layOutIndex = i - 1
                        var col = i % 4;
                        var row = Math.floor(i / 4);

                        var left = baseLeft + col * (width + spacing);
                        var top  = baseTop  + row * (height + spacing);

                        comp.move(left, top, width, height);
                        trace("재배치: " + viewerId + " → (" + left + ", " + top + ")");
                    }
                }
            } catch (ex) {
                trace("fn_rearrangeImageViewers 오류: " + ex.message);
            }
        };



        this.ds_product_cancolumnchange = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductReg_onload,this);
            this.addEventHandler("ontimer",this.ProductReg_ontimer,this);
            this.rdo_display.addEventHandler("onitemchanged",this.rdo_display_onitemchanged,this);
            this.rdo_sale.addEventHandler("onitemchanged",this.rdo_sale_onitemchanged,this);
            this.cmb_maincate.addEventHandler("onitemchanged",this.cmb_maincate_onitemchanged,this);
            this.edt_name.addEventHandler("onchanged",this.edt_name_onchanged,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.web_postContent.addEventHandler("onloadcompleted",this.web_postContent_onloadcompleted,this);
            this.btn_selectFile.addEventHandler("onclick",this.btn_selectFile_onclick,this);
            this.categories.addEventHandler("onsuccess",this.categoriesJsonSuccess,this);
            this.categories.addEventHandler("onerror",this.categoriesJsonError,this);
            this.categories.addEventHandler("onload",this.categoriesJsonOnload,this);
            this.productImage.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.productImageTransfer.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.productImageTransfer.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.productImageTransfer.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.ds_product.addEventHandler("cancolumnchange",this.ds_product_cancolumnchange,this);
        };
        this.loadIncludeScript("Form_ProductReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
