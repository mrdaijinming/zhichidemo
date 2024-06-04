
import React, { Component,useState} from 'react';
import {Modal, Button, Input, Space,Select, Form} from 'antd';

import NiceModal from "@ebay/nice-modal-react";
import card_theme from '../css/member.css';
import MyModal from './popModal';
import {Checkbox,Radio} from 'antd';
//知识点，箭头函数不改变this指向
// showcard:1 显示订单卡片，2显示商品卡片，3显示优惠等自定义卡片，0不显示
// 展示千人千面、业务选项卡、热点问题、多轮对话、自定义订单卡片、分词联想等核心机器人能力。生成的专属聊天页链接可以收藏到地址栏，方便下次直接使用
//展示千人千面、业务选项卡、热点问题、多轮对话、自定义订单卡片、分词联想等核心机器人能力。生成的专属聊天页链接可以收藏到地址栏，方便下次直接使用
//展示千人千面、业务选项卡、热点问题、多轮对话、分词联想等核心机器人能力。生成的专属聊天页链接可以收藏到地址栏，方便下次直接使用'
//展示千人千面、业务选项卡、热点问题、多轮对话、分词联想等核心机器人能力。生成的专属聊天页链接可以收藏到地址栏，方便下次直接使用
export default function App() {
    const [list, setList] = useState([
            {id: 1, title: '零售行业-快销品', 
            url:'https://www.sobot.com/chat/pc/v6/index.html?sysnum=b77e9e46bdc34890b91dab906f7114e2&channelid=15',
            remark:'快销品行业机器人，应用场景包括开具发票、政策查询、物流咨询等。',
            cardflag:'2',
            agentid:'',
            partnerid:'1',
            type:'3',
            locale:'cn',
            card_info:''},
            {id: 2, title: '智能家居-售后服务', 
            url:'https://www.sobot.com/chat/pc/v6/index.html?sysnum=b77e9e46bdc34890b91dab906f7114e2&channelid=22',
            remark:'智能家居行业机器人，应用场景包括维修报障、功能说明、热点问题等。',
            cardflag:'0',
            agentid:'',
            partnerid:'2',
            type:'3',
            locale:'cn',
            card_info:''},
            {id: 3, title: '企业内部共享-HRSSC', 
            url:'https://www.sobot.com/chat/pc/v6/index.html?sysnum=b77e9e46bdc34890b91dab906f7114e2&channelid=14',
            remark:'企业内部服务机器人，应用场景包括社保查询、积分落户、法务信息等。',
            cardflag:'0',
            agentid:'',
            partnerid:'3',
            type:'3',
            locale:'cn',
            card_info:''},
            {id: 3, title: '制造业-售前售后', 
            url:'https://www.sobot.com/chat/pc/v6/index.html?sysnum=b77e9e46bdc34890b91dab906f7114e2&channelid=25',
            remark:'制造业服务机器人，应用场景包括门店咨询、新品查询等售前场景以及解决报障、维修等售后场景。',
            cardflag:'0',
            agentid:'',
            partnerid:'3',
            type:'3',
            locale:'cn',
            card_info:''}
        ]);
    const typename='机器人优先'
    
    const [obj, setObj] = useState();
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
      
    const Option = Select.Option
    const setHandle=(data)=>{
        console.log(data);
        // console.log(this);
        setObj(data);
        form.setFieldsValue({ ...data });
        setVisible(true);
   }
   
   const openHandle = (data) => {
    console.log(data);
    console.log(obj);
    if(data.cardflag==1){
        data.card_info='card_title=云客服_智齿客服&card_url=http://www.sobot.com&card_desc=云客服,在线客服系统,云呼叫中心,机器人客服,工单客服,智能客服&card_note=2580&card_picture=https://img.sobot.com/chatres/137647808eba49b8ab81b4cf0b8e8c9d/msg/20230629/bb8f52abcde9fb64eae76fe546600be6/3eaed97a216349048bea79e4c8db81e9.png';
    }else if(data.cardflag==2){
        data.card_info='card_info={%22cardId%22:%22123456%22,%22cardStyle%22:1,%22cardType%22:0,%22cardGuide%22:%22%E8%AF%B7%E6%A0%B8%E5%AF%B9%E6%82%A8%E7%9A%84%E8%AE%A2%E5%8D%95%E4%BF%A1%E6%81%AF%22,%22cardLink%22:%22https://www.sobot.com%22,%22customCards%22:[{%22customCardStatus%22:%22%E8%AE%A2%E5%8D%95%E7%A1%AE%E8%AE%A4%E4%B8%AD%22,%22customCardCount%22:%22%E5%85%B11%E4%BB%B6%E5%95%86%E5%93%81%22,%22customCardCode%22:%22DD2023081038299%22,%22customCardTime%22:%22%22,%22customCardId%22:%2210611111%22,%22customCardName%22:%22Apple%20%E8%8B%B9%E6%9E%9C%20iPhone%2014%20Pro%20256GB%20%E6%9A%97%E7%B4%AB%E8%89%B2A2892%E6%89%8B%E6%9C%BA%22,%22customCardThumbnail%22:%22https://img.sobot.com/chatres/137647808eba49b8ab81b4cf0b8e8c9d/msg/20230629/bb8f52abcde9fb64eae76fe546600be6/3eaed97a216349048bea79e4c8db81e9.png%22,%22customCardAmount%22:%227699.00%22,%22customCardAmountSymbol%22:%22%C2%A5%22,%22customCardLink%22:%22https://www.sobot.com%22,%22customCardDesc%22:%22%E5%BC%BA%E5%8A%B2%E8%8A%AF%E7%89%87|%E5%87%BA%E8%89%B2%E6%91%84%E5%83%8F|%E6%B5%81%E7%95%85%E6%98%BE%E7%A4%BA|%E5%85%8D%E8%B4%B9%E7%BB%B4%E4%BF%AE|5G%E6%94%AF%E6%8C%81|%E9%AB%98%E5%AD%98%E5%82%A8%E5%AE%B9%E9%87%8F|%E6%81%AF%E5%B1%8F%E6%98%BE%E7%A4%BA%22,%22customMenus%22:[{%22menuType%22:2,%22menuName%22:%22%E5%8F%91%E9%80%81%E8%AE%A2%E5%8D%95%E7%BB%99%E5%AE%A2%E6%9C%8D%22},{%22menuType%22:0,%22menuName%22:%22%E6%9F%A5%E7%9C%8B%E8%AF%A6%E6%83%85%22,%22menuLink%22:%22https://www.sobot.com%22,%22menuLinkType%22:2},{%22menuType%22:1,%22menuName%22:%22%E7%A1%AE%E8%AE%A4%E8%AE%A2%E5%8D%95%22,%22menuTip%22:%22%E6%82%A8%E5%B7%B2%E7%A1%AE%E8%AE%A4%E8%AE%A2%E5%8D%95%E4%BF%A1%E6%81%AF%22}]}],%22cardMenus%22:[{%22menuType%22:0,%22menuName%22:%22%E6%9F%A5%E7%9C%8B%E8%AF%A6%E6%83%85%22,%22menuLink%22:%22https://www.sobot.com%22,%22menuLinkType%22:2},{%22menuType%22:1,%22menuName%22:%22%E7%A1%AE%E8%AE%A4%E8%AE%A2%E5%8D%95%22,%22menuTip%22:%22%E6%82%A8%E5%B7%B2%E7%A1%AE%E8%AE%A4%E8%AE%A2%E5%8D%95%E4%BF%A1%E6%81%AF%22},{%22menuType%22:2,%22menuName%22:%22%E5%8F%91%E9%80%81%E8%AE%A2%E5%8D%95%E7%BB%99%E5%AE%A2%E6%9C%8D%22}]}'
    }else if(data.cardflag==3){
        data.card_info='card_info={"cardId":"123456","cardStyle":1,"cardType":1,"cardGuide":"推荐商品","cardDesc":"欢迎点击领取优惠劵","cardImg":"https://img.sobot.com/chatres/137647808eba49b8ab81b4cf0b8e8c9d/msg/20230628/4eef15f80e3a8e25448365cef0d31b0f/aece05e116d24ac99ced073e5ed95eed.png","customField":{"活动时间":"2023-09-01～2023-09-08"},"cardLink":"https://www.sobot.com","customCards":[{"customCardId":"10611111","customCardName":"Apple%20苹果%20iPhone%2014%20Pro%20256GB%20暗紫色A2892手机","customCardThumbnail":"https://img.sobot.com/chatres/137647808eba49b8ab81b4cf0b8e8c9d/msg/20230629/bb8f52abcde9fb64eae76fe546600be6/3eaed97a216349048bea79e4c8db81e9.png","customCardAmount":"7699.00","customCardAmountSymbol":"¥","customCardLink":"https://www.sobot.com","customCardDesc":"强劲芯片|出色摄像|流畅显示|免费维修|5G支持|高存储容量|息屏显示","customMenus":[{"menuType":2,"menuName":"发送"},{"menuType":0,"menuName":"查看详情","menuLink":"https://www.sobot.com","menuLinkType":2},{"menuType":1,"menuName":"确认商品","menuTip":"您已确认商品信息"}]},{"customCardId":"10711111","customCardName":"Apple%20苹果%20iPhone%2014%20Pro%20256GB%20深空黑色A2892手机","customCardThumbnail":"https://img.sobot.com/chatres/a6c9535d3bbf48e7b7c7d5ea3533fcf3/msg/20230629/fe18dd95872a4ecbabc6d13fba765c3a/f389fbd3229c48f58caad830dc38e9d9.jpeg","customCardAmount":"7699.00","customCardAmountSymbol":"¥","customCardLink":"https://www.sobot.com","customCardDesc":"强劲芯片|出色摄像|流畅显示|免费维修|5G支持|高存储容量|息屏显示","customMenus":[{"menuType":2,"menuName":"发送"},{"menuType":0,"menuName":"查看详情","menuLink":"https://www.sobot.com","menuLinkType":2},{"menuType":1,"menuName":"确认商品","menuTip":"您已确认商品信息"}]}],"cardMenus":[{"menuType":0,"menuName":"查看详情","menuLink":"https://www.sobot.com","menuLinkType":2},{"menuType":1,"menuName":"确认商品","menuTip":"您已确认商品信息"},{"menuType":2,"menuName":"发送"}]}';
    }else{
        data.card_info=''
    }
        const url = `${data.url}&agentid=${data.agentid}&${data.card_info}&partnerid=${data.partnerid}&type=${data.type}&locale=${data.locale}`;
        window.open(url);
      };
    const onOkHandle = () => {
        const values = form.getFieldsValue();
        console.log(values);
        // 这是异步的，而且不再需要设置obj，obj只是个载体，用来记录编辑的是哪个对象
        // setObj({...obj, ...values})
        console.log(list);

        const newList = list.map((item) => {
            if (item.id === obj.id) {
            // 因为state是异步的，这样会拿到还是之前的obj
            // return obj
            return { ...item, ...values };
            }
            return item;
        });
        console.log(newList);
        setList(newList);
        setVisible(false);
    };
    
    return (
        <div className='robotlist'>
            {list.map((item)=>(
                <div className='robotele' key={item.id}>
                    <p className='h2'>{item.title}</p>
                    <p className='remark'>
                    {item.remark}
                    </p>
                    <div className='elebot'>
                        <p className='set' onClick={()=>setHandle(item)}>设置</p> 
                        <p className='openrobot'><a onClick={()=>openHandle(item)} className='robotlink' target='_blank'>生成链接</a></p>
                    </div>
                </div>
            ))}
        
            <Modal
            open={visible}
            onCancel={() => setVisible(false)}
            onOk={onOkHandle}
            title="参数设置（非必选）"
            >
            <Form form={form}>
                <Form.Item label="客服id" name="agentid" style={{marginTop:30}}>
                    <Input  placeholder="输入客服id,转人工锁定客服"
                    style={{
                        width: 270
                        }}/>
                </Form.Item>
                <Form.Item label="卡片类型" name='cardflag'>
                    <Select 
                        style={{
                        width: 270,
                        }}
                    >
                        {/* defaultValue="请选择类型" */}
                        <Option value="0">不选择卡片</Option>
                        <Option value="1">商品卡片</Option>
                        <Option value="2">订单卡片</Option>
                        <Option value="3">自定义卡片</Option>

                    </Select>
                </Form.Item> 
                <Form.Item label="用户id" name="partnerid">
                    <Input  placeholder="模拟多个用户进线资询"
                    style={{
                        width: 270,
                        }}/>
                </Form.Item>
                <Form.Item label="接待模式" name='type'>
                    <Select
                        style={{
                        width: 270,
                        }}
                    >
                        <Option value="1">仅机器人客服</Option>
                        <Option value="2">仅人工客服</Option>
                        <Option value="3">机器人客服优先</Option>
                        <Option value="4">人工客服优先</Option>
                    </Select>
                </Form.Item> 

                <Form.Item label="语言" name='locale'>
                    <Select
                        style={{
                        width: 270,
                        }}
                    >
                        <Option value="cn">中文</Option>
                        <Option value="en">英文</Option>
                        <Option value="tw">繁体中文</Option>
                    </Select>
                </Form.Item> 
            </Form>
            </Modal>
        </div>

     )
    }
