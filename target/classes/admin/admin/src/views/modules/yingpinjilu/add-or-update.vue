<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='zhaopinxinxi'">
                    <el-form-item class="select" v-if="type!='info'"  label="招聘信息" prop="zhaopinxinxiId">
                        <el-select v-model="ruleForm.zhaopinxinxiId" :disabled="ro.zhaopinxinxiId" filterable placeholder="请选择招聘信息" @change="zhaopinxinxiChange">
                            <el-option
                                    v-for="(item,index) in zhaopinxinxiOptions"
                                    v-bind:key="item.id"
                                    :label="item.zhaopinxinxiName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='zhaopinxinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="招聘信息名称" prop="zhaopinxinxiName">
                        <el-input v-model="zhaopinxinxiForm.zhaopinxinxiName"
                                  placeholder="招聘信息名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="招聘信息名称" prop="zhaopinxinxiName">
                            <el-input v-model="ruleForm.zhaopinxinxiName"
                                      placeholder="招聘信息名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='zhaopinxinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="招聘类型" prop="zhaopinxinxiValue">
                        <el-input v-model="zhaopinxinxiForm.zhaopinxinxiValue"
                                  placeholder="招聘类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="招聘类型" prop="zhaopinxinxiValue">
                            <el-input v-model="ruleForm.zhaopinxinxiValue"
                                      placeholder="招聘类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='zhaopinxinxi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="招聘人数" prop="zhaopinxinxiNumber">
                        <el-input v-model="zhaopinxinxiForm.zhaopinxinxiNumber"
                                  placeholder="招聘人数" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="招聘人数" prop="zhaopinxinxiNumber">
                            <el-input v-model="ruleForm.zhaopinxinxiNumber"
                                      placeholder="招聘人数" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="zhaopinxinxiId" name="zhaopinxinxiId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="应聘人员姓名" prop="yingpinjiluName">
                       <el-input v-model="ruleForm.yingpinjiluName"
                                 placeholder="应聘人员姓名" clearable  :readonly="ro.yingpinjiluName"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="应聘人员姓名" prop="yingpinjiluName">
                           <el-input v-model="ruleForm.yingpinjiluName"
                                     placeholder="应聘人员姓名" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="应聘人员手机号" prop="yingpinjiluPhone">
                       <el-input v-model="ruleForm.yingpinjiluPhone"
                                 placeholder="应聘人员手机号" clearable  :readonly="ro.yingpinjiluPhone"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="应聘人员手机号" prop="yingpinjiluPhone">
                           <el-input v-model="ruleForm.yingpinjiluPhone"
                                     placeholder="应聘人员手机号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="应聘人员身份证号" prop="yingpinjiluIdNumber">
                       <el-input v-model="ruleForm.yingpinjiluIdNumber"
                                 placeholder="应聘人员身份证号" clearable  :readonly="ro.yingpinjiluIdNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="应聘人员身份证号" prop="yingpinjiluIdNumber">
                           <el-input v-model="ruleForm.yingpinjiluIdNumber"
                                     placeholder="应聘人员身份证号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="教育情况" prop="jiaoyuContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.jiaoyuContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.jiaoyuContent" label="教育情况" prop="jiaoyuContent">
                            <span v-html="ruleForm.jiaoyuContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="工作经历" prop="gongzuoContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.gongzuoContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.gongzuoContent" label="工作经历" prop="gongzuoContent">
                            <span v-html="ruleForm.gongzuoContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="个人介绍" prop="gerenContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.gerenContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.gerenContent" label="个人介绍" prop="gerenContent">
                            <span v-html="ruleForm.gerenContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  class="input" label="应聘时间" prop="yingpinTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.yingpinTime"
                                type="datetime"
                                placeholder="应聘时间"
                                :disabled="ro.yingpinTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.yingpinTime" label="应聘时间" prop="yingpinTime">
                            <span v-html="ruleForm.yingpinTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="是否已面试" prop="mianshiTypes">
                        <el-select v-model="ruleForm.mianshiTypes" :disabled="ro.mianshiTypes" placeholder="请选择是否已面试">
                            <el-option
                                v-for="(item,index) in mianshiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="是否已面试" prop="mianshiValue">
                        <el-input v-model="ruleForm.mianshiValue"
                            placeholder="是否已面试" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="面试结果" prop="mianshiJieguoTypes">
                        <el-select v-model="ruleForm.mianshiJieguoTypes" :disabled="ro.mianshiJieguoTypes" placeholder="请选择面试结果">
                            <el-option
                                v-for="(item,index) in mianshiJieguoTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="面试结果" prop="mianshiJieguoValue">
                        <el-input v-model="ruleForm.mianshiJieguoValue"
                            placeholder="面试结果" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                zhaopinxinxiForm: {},
                ro:{
                    zhaopinxinxiId: false,
                    yingpinjiluName: false,
                    yingpinjiluPhone: false,
                    yingpinjiluIdNumber: false,
                    jiaoyuContent: false,
                    gongzuoContent: false,
                    gerenContent: false,
                    yingpinTime: false,
                    mianshiTypes: false,
                    mianshiJieguoTypes: false,
                    insertTime: false,
                },
                ruleForm: {
                    zhaopinxinxiId: '',
                    yingpinjiluName: '',
                    yingpinjiluPhone: '',
                    yingpinjiluIdNumber: '',
                    jiaoyuContent: '',
                    gongzuoContent: '',
                    gerenContent: '',
                    yingpinTime: '',
                    mianshiTypes: '',
                    mianshiJieguoTypes: '',
                    insertTime: '',
                },
                mianshiTypesOptions : [],
                mianshiJieguoTypesOptions : [],
                zhaopinxinxiOptions : [],
                rules: {
                   zhaopinxinxiId: [
                              { required: true, message: '招聘信息不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   yingpinjiluName: [
                              { required: true, message: '应聘人员姓名不能为空', trigger: 'blur' },
                          ],
                   yingpinjiluPhone: [
                              {  required: true, message: '应聘人员手机号不能为空', trigger: 'blur' },
                              {  pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                                 message: '应聘人员手机号格式不对',
                                 trigger: 'blur'
                              }
                          ],
                   yingpinjiluIdNumber: [
                              { required: true, message: '应聘人员身份证号不能为空', trigger: 'blur' },
                              { pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                                message: '应聘人员身份证号格式有误！',
                                trigger: 'blur'
                              }
                          ],
                   jiaoyuContent: [
                              { required: true, message: '教育情况不能为空', trigger: 'blur' },
                          ],
                   gongzuoContent: [
                              { required: true, message: '工作经历不能为空', trigger: 'blur' },
                          ],
                   gerenContent: [
                              { required: true, message: '个人介绍不能为空', trigger: 'blur' },
                          ],
                   yingpinTime: [
                              { required: true, message: '应聘时间不能为空', trigger: 'blur' },
                          ],
                   mianshiTypes: [
                              { required: true, message: '是否已面试不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   mianshiJieguoTypes: [
                              { required: true, message: '面试结果不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   insertTime: [
                              { required: true, message: '添加时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");

            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=mianshi_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.mianshiTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=mianshi_jieguo_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.mianshiJieguoTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `zhaopinxinxi/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.zhaopinxinxiOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            zhaopinxinxiChange(id){
                this.$http({
                    url: `zhaopinxinxi/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.zhaopinxinxiForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `yingpinjilu/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.zhaopinxinxiChange(data.data.zhaopinxinxiId)
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`yingpinjilu/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.yingpinjiluCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.yingpinjiluCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

