
import React, { Component,useState} from 'react';
import {Modal, Button, Input, Space,Select, Form} from 'antd';

import {Checkbox,Radio} from 'antd';
   
export default function App() {
     
    const handerClick=(index)=>{
       
    }
   
   const openHandle = (data) => {
    
    };
    
    return (
        <div className='caselist'>
            <button className='casebutton'><a href="https://devinxiaodai.github.io/sobotshop/" target="_blank">获取对接页面链接</a></button>
           <div className='artical'>
            <p>国内环境访问会存在几秒延迟</p>
            <p className='bold'>需求背景：</p>
            <p>用户接入会话，对接页面自动查询当前用户的订单列表，客服可以一键发送订单向用户进行订单确认。也可以根据用户浏览轨迹、收藏列表、购物车等数据分析出来客户比较关注的商品列表。向用户发送商品做商品推荐。除了订单和商品卡片的发送，对接页面也可以向用户发送自定义卡片，可以结合B端客户的实际业务，实现发放优惠券、物流信息查询、订单确认等丰富性的定制化卡片功能。</p>
            <p className='bold'>功能描述：</p>
            <p>一、发送订单确认。客服点击发送按钮，可以将选中的订单一键发送给用户，让用户进行订单确认。</p>
            <img width="500px" src="https://img.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20240312/06061405e9a046828ecd4607b36d8e8a/1d7f8b7c657540dab84f583917d1c8a6.png"></img>
            <p>二、订单关联工单。可以针对该订单，一键创建关联工单，将订单信息自动带入工单，避免客服手动填写订单，提升客服建单效率</p>
            <img width="500px" src="https://img.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20240312/06061405e9a046828ecd4607b36d8e8a/bb16772237114b1fa4baefcd707a150a.png"></img>

            <p>三、发送推荐商品。对接页面按照浏览轨迹、收藏列表、购物车等条件自动查询出用户可能会关注的商品列表，客服一键向用户发推荐，提升转化率。</p>
            <img width="500px" src="https://img.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20240312/06061405e9a046828ecd4607b36d8e8a/1c197f6bd6cd4eeb8b9fad21a800b1ca.png"></img>
            
            <p>四、自定义卡片。客户可以结合实际业务，实现发放优惠券、物流信息查询、订单确认等丰富性的定制化卡片功能。</p>
            <img width="500px" src="https://img.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20240312/06061405e9a046828ecd4607b36d8e8a/7fc854ca20ae4bdb86229e497756cc03.png"></img>
           
            <p>五、用户端展示效果，需要注意的是仅针对V6版PC/H5/SDK渠道生效。</p>
            <img width="500px" src="https://img.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20240312/06061405e9a046828ecd4607b36d8e8a/890992591fe94782a500965cd7094de4.png"></img>
            </div>
        </div>
     )
    }
