(()=>{var t={817:()=>{function t(t){throw new TypeError('"'+t+'" is read-only')}var e=jQuery;e(window).on("load",(function(){var a=qTranslateConfig.js.get_qtx();if(a.enableLanguageSwitchingButtons("block"),window.acf_qtranslate_translate_standard_field_types){e(".acf-postbox .acf-field").find(".qtranxs-translatable").each((function(){a.removeContentHook(this)}));var i=e("#post_type").val();e.each({text:"input:text",textarea:"textarea",wysiwyg:".wp-editor-area"},(function(t,i){acf.get_fields({type:t}).each((function(){var t=e(this).closest("form").get(0),r=e(this).find(i).get(0);n(r)&&a.addContentHookC(r,t)})),acf.add_action("append_field/type="+t,(function(t){var r=t.closest("form").get(0),l=t.find(i).get(0);if(n(l)&&(a.addContentHookC(l,r),e(l).hasClass("wp-editor-area"))){var s=document.createEvent("UIEvents");s.initEvent("load",!1,!1,window),window.dispatchEvent(s)}}),100)})),acf.models?(t("repeaterFieldRemove"),acf.models.RepeaterField.prototype.remove):(t("repeaterFieldRemove"),acf.fields.repeater.remove)}function n(t){return"acf-field-group"!==i||!!t.id.match(/acf_fields-\d+-label/)||!!t.id.match(/acf_fields-\d+-instructions/)||!!t.id.match(/acf_fields-\d+-default_value/)}}))},719:()=>{var t=jQuery;acf.registerFieldType(acf.models.FileField.extend({type:"qtranslate_file",$control:function(){return this.$(".acf-file-uploader.current-language")},$input:function(){return this.$('.acf-file-uploader.current-language input[type="hidden"]')},render:function(t){t=this.validateAttachment(t),this.$control().find("img").attr({src:t.icon,alt:t.alt,title:t.title}),this.$control().find('[data-name="title"]').text(t.title),this.$control().find('[data-name="filename"]').text(t.filename).attr("href",t.url),this.$control().find('[data-name="filesize"]').text(t.filesizeHumanReadable);var e=t.id||"";acf.val(this.$input(),e),e?this.$control().addClass("has-value"):this.$control().removeClass("has-value")}})),acf.registerFieldType(acf.models.ImageField.extend({type:"qtranslate_image",$control:function(){return this.$(".acf-image-uploader.current-language")},$input:function(){return this.$('.acf-image-uploader.current-language input[type="hidden"]')},render:function(t){t=this.validateAttachment(t),this.$control().find("img").attr({src:t.url,alt:t.alt,title:t.title});var e=t.id||"";this.val(e),e?this.$control().addClass("has-value"):this.$control().removeClass("has-value")}})),acf.registerFieldType(acf.models.PostObjectField.extend({type:"qtranslate_post_object",$input:function(){return this.$(".acf-post-object.current-language select")},initialize:function(){var e=this,a=this.$input();if(this.inherit(a),this.get("ui")){var i=this.get("ajax_action");i||(i="acf/fields/"+this.get("type")+"/query"),this.select2=[],this.$(".acf-post-object select").each((function(){e.select2.push(acf.newSelect2(t(this),{field:e,ajax:e.get("ajax"),multiple:e.get("multiple"),placeholder:e.get("placeholder"),allowNull:e.get("allow_null"),ajaxAction:i}))}))}},onRemove:function(){if(this.select2)for(var t=0;t<this.select2.length;t++)this.select2[t].destroy()}})),acf.registerFieldType(acf.models.UrlField.extend({type:"qtranslate_url",$control:function(){return this.$(".acf-input-wrap.current-language")},$input:function(){return this.$('.acf-input-wrap.current-language input[type="url"]')}})),acf.registerFieldType(acf.models.WysiwygField.extend({type:"qtranslate_wysiwyg",initializeEditor:function(){var e=this;this.$(".acf-editor-wrap").each((function(){var a=t(this),i=a.find("textarea"),n={tinymce:!0,quicktags:!0,toolbar:e.get("toolbar"),mode:e.getMode(),field:e},r=i.attr("id"),l=acf.uniqueId("acf-editor-");acf.rename({target:a,search:r,replace:l,destructive:!0}),e.set("id",l,!0),acf.tinymce.initialize(l,n)}))}}))},174:()=>{var t=jQuery,e=t("body"),a=function(e){var a=t(".multi-language-field");a.find(".current-language").removeClass("current-language"),a.find('[data-language="'+e+'"]').addClass("current-language"),a.find('input[data-language="'+e+'"], textarea[data-language="'+e+'"]')};e.on("click",".qtranxs-lang-switch",(function(){var e=t(this).attr("lang");a(e)})),e.on("click",".wp-switch-editor[data-language]",(function(){var e=t(this).parent(".multi-language-field"),a=t(this).data("language");e.find(".current-language").removeClass("current-language"),e.find('[data-language="'+a+'"]').addClass("current-language"),e.find('input[data-language="'+a+'"], textarea[data-language="'+a+'"]').focus(),t('.qtranxs-lang-switch[lang="'+a+'"]:first').trigger("click")})),e.on("focusin",".multi-language-field input, .multi-language-field textarea",(function(){t(this).parent(".multi-language-field").addClass("focused")})),e.on("focusout",".multi-language-field input, .multi-language-field textarea",(function(){t(this).parent(".multi-language-field").removeClass("focused")})),e.on("click",".wp-editor-tabs .wp-switch-editor",(function(){var e=t(this).parents(".multi-language-field"),a=t(this).hasClass("switch-tmce")?"tmce":"html";e.find(".wp-editor-tabs .wp-switch-editor.switch-"+a).not(this).each((function(){var e=t(this).attr("data-wp-editor-id");e?window.switchEditors.go(e,a):switchEditors.switchto(this)}))})),t((function(){if(qTranslateConfig.LSB){var e=qTranslateConfig.js.get_qtx().getActiveLanguage();if(e){a(e);var i=t(".multi-language-field");i.find(".current-language").removeClass("current-language"),i.find('[data-language="'+e+'"]').addClass("current-language")}}}))}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,a),r.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";a(719),a(174),a(817)})()})();