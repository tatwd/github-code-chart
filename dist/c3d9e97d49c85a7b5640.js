(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{186:function(t,e,i){var o=i(0),n=i(30),l=i(9),g=i(31).getLayoutRect;n.extendComponentModel({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),n.extendComponentView({type:"title",render:function(t,e,i){if(this.group.removeAll(),t.get("show")){var n=this.group,d=t.getModel("textStyle"),r=t.getModel("subtextStyle"),a=t.get("textAlign"),x=o.retrieve2(t.get("textBaseline"),t.get("textVerticalAlign")),h=new l.Text({style:l.setTextStyle({},d,{text:t.get("text"),textFill:d.getTextColor()},{disableBox:!0}),z2:10}),c=h.getBoundingRect(),s=t.get("subtext"),p=new l.Text({style:l.setTextStyle({},r,{text:s,textFill:r.getTextColor(),y:c.height+t.get("itemGap"),textVerticalAlign:"top"},{disableBox:!0}),z2:10}),u=t.get("link"),y=t.get("sublink"),b=t.get("triggerEvent",!0);h.silent=!u&&!b,p.silent=!y&&!b,u&&h.on("click",(function(){window.open(u,"_"+t.get("target"))})),y&&p.on("click",(function(){window.open(y,"_"+t.get("subtarget"))})),h.eventData=p.eventData=b?{componentType:"title",componentIndex:t.componentIndex}:null,n.add(h),s&&n.add(p);var w=n.getBoundingRect(),m=t.getBoxLayoutParams();m.width=w.width,m.height=w.height;var v=g(m,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));a||("middle"===(a=t.get("left")||t.get("right"))&&(a="center"),"right"===a?v.x+=v.width:"center"===a&&(v.x+=v.width/2)),x||("center"===(x=t.get("top")||t.get("bottom"))&&(x="middle"),"bottom"===x?v.y+=v.height:"middle"===x&&(v.y+=v.height/2),x=x||"top"),n.attr("position",[v.x,v.y]);var f={textAlign:a,textVerticalAlign:x};h.setStyle(f),p.setStyle(f),w=n.getBoundingRect();var S=v.margin,k=t.getItemStyle(["color","opacity"]);k.fill=t.get("backgroundColor");var z=new l.Rect({shape:{x:w.x-S[3],y:w.y-S[0],width:w.width+S[1]+S[3],height:w.height+S[0]+S[2],r:t.get("borderRadius")},style:k,subPixelOptimize:!0,silent:!0});n.add(z)}}})}}]);