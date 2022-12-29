import React, { Component } from 'react'
import {connect} from 'react-redux';
class BTBurger  extends Component {
  renderBreadMid=()=>{
    // console.log(this.props.burger)
    //cách 1: dùng for in 
    let {burger} = this.props;
    let content=[];
    for (let propBurger in burger){
      // console.log(propBurger,burger[propBurger]);
      let breadMid=[];
      for (let i=0;i<burger[propBurger];i++){
         breadMid.push(<div key={i} className={propBurger}></div>)
      }
      content.push(breadMid)
    }
    return content;
    //cách 2: dùng object.entries
  //  return Object.entries(burger).map(([propBurger,value],index )=>{
  //     // console.log(propBurger,value);//giống for in nhưng viết theo cách khác 
  //     let breadMid=[];
  //     for (let i=0;i<value;i++){
  //       breadMid.push(<div key={i} className={propBurger}></div>)
  //     }
  //     return breadMid;
  //  })
   //entries: bóc tách đối tượng thành mảng con 
  }
  renderMenu=()=>{
    let {menu,burger}=this.props;
    // console.log(Object.entries(menu));
   return Object.entries(menu).map(([propsMenu,price],index)=>{
    return (
      
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button onClick={()=>{
              {this.props.addBreadMid(propsMenu,1)}
            }} className='btn btn-success mx-2'>+</button>
            {burger[propsMenu]}
            <button onClick={()=>{
              {this.props.addBreadMid(propsMenu,-1)}
            }} className='btn btn-danger mx-2'>-</button>

          </td>
          <td>{price}</td>
          <td>{burger[propsMenu]*price}</td>
        </tr>
      
    )
   })
  }
  render() {
    return (
      <div className='container'>
        <h3 className='display-4 text-success'>Bài tập burger cybersoft</h3>
        <div className='row'>
            <div className='col-7'>
                <h3 className='text-danger text-center'>Bánh burger của bạn</h3>
                <div className='breadTop'></div>
                  {this.renderBreadMid()}
                <div className='breadBottom'></div>

            </div>
            <div className='col-5'>
              <h3 className='text-center text-success'>Chọn thức ăn</h3>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>Thức ăn</th>
                        <th></th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                      </tr>
                  {this.renderMenu()}
                  </thead>
                  <tfoot>
                    <tr>
                      <td colSpan="2"></td>
                      <td>Tổng cộng </td>
                      <td>{this.props.total}</td>
                    </tr>
                  </tfoot>
                  </table>
               
            </div>
        </div>
      </div>
    )
  }
}
//tạo ra props đưa dữ liệu lên reducer
const mapDispatchToProps=dispatch=>{
  return {
    addBreadMid:(propsBurger,amount)=>{
      //Tạo ra action 
      const action ={
        type:'ADD_BREADMID',
        propsBurger,
        amount
      }
      dispatch(action);
    }
  }
}
const mapStateToProps=state=>{
    return {
        burger:state.BurgerReducer.burger,
        menu:state.BurgerReducer.menu,
        total:state.BurgerReducer.total
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BTBurger);