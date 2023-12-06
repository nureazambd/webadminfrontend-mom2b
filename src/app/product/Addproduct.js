import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';
import "./addproduct.css"

export default function Addproduct() {
	const [productID, setProductID] = React.useState("");
	const [productName, setProductName] = React.useState("");
	const [proEmail, setProEmail] = React.useState("");
	const [productCategory, setProductCategory] = React.useState("");
	const [availableQuantity, setAvailableQuantity] = React.useState("");
	const [productWeight, setProductWeight] = React.useState("");
	const [productDescription, setProductDescription] = React.useState("");
	const [productDescriptionFR, setProductDescriptionFR] = React.useState("");
	const [percentageDiscount, setPercentageDiscount] = React.useState("");
	const [stockAlert, setStockAlert] = React.useState("");
	const [onlineDate, setOnlineDate] = React.useState("");
	const [approuvedBy, setApprouvedBy] = React.useState("");
	const [mainImage, setMainImage] = React.useState("");
	const [auxiliaryImage, setAuxiliaryImage] = React.useState("");

	const [error, setError] = React.useState("");

	const handleAddProduct = ()=>{
		console.warn(productID, productName, productCategory);
		if(!productID || !productName || !proEmail || !productCategory || !availableQuantity || !productWeight || !productDescription || !productDescriptionFR || !percentageDiscount || !stockAlert || !onlineDate || !approuvedBy || !mainImage || !auxiliaryImage){
			setError(true);
			return false;
		}

	}

  return (
    // <div classNameName='col-lg-8 col-md-8 ml-auto mr-auto   p-3 mb-2 bg-white bg-gradient text-dark shadow-lg rounded-lg'>
    <div className=''>
<div className="container contact ">
	<div className="row shadow-lg">
		<div className="col-md-3 bg-col-md-3">
			<div className="contact-info">
				<img src={ require("../../assets/images/Vector.png")} alt="image"/>
				<h2>Add Product</h2>
				{/* <h4>We would love to hear from you !</h4> */}
        <h4>Please fill this form in a decent manner</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-4" for="fname"><span className='text-danger'>*</span>Product ID:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="productID" placeholder="Enter Product ID" name="productID"
					onChange={(e)=>setProductID(e.target.value)} value={productID}
					/>
				  </div>
				</div>
				{error && !productID && <span className="invalid-input">Enter valid product ID</span>}
				<div className="form-group">
				  <label className="control-label col-sm-5" for="lname"><span className='text-danger'>*</span>Product Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="productName" placeholder="Enter Product Name" name="productName"
					onChange={(e)=>setProductName(e.target.value)} value = {productName}
					/>
				  </div>
				</div>
				{error && !productName && <span className='invalid-input'>Enter valid product name</span>}
				<div className="form-group">
				  <label className="control-label col-sm-2" for="email">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
					onChange={(e)=>setProEmail(e.target.value)} value = {proEmail}
					/>
				  </div>
				</div>
				{error && !proEmail && <span className='invalid-input'>Enter valid email</span>}
				

        		<div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Product Category:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Product Category" name="productCategory"
					onChange={(e)=>setProductCategory(e.target.value)} value = {productCategory}
					/>
				  </div>
				</div>
				{error && !productCategory && <span className='invalid-input'>Enter valid product category</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Available Quantity:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Available Quantity" name="available quantity"
					onChange={(e)=>setAvailableQuantity(e.target.value)} value = {availableQuantity}
					/>
				  </div>
				</div>
				{error && !availableQuantity && <span className='invalid-input'>Enter valid available quantity</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Product Weight:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Product Weight" name="product weight"
					onChange={(e)=>setProductWeight(e.target.value)} value = {productWeight}
					/>
				  </div>
				</div>
				{error && !productWeight && <span className='invalid-input'>Enter valid product weight</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="comment"><span className='text-danger'>*</span>Product Description:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment"
					onChange={(e)=>setProductDescription(e.target.value)} value = {productDescription}
					></textarea>
				  </div>
				</div>
				{error && !productDescription && <span className='invalid-input'>Enter valid product description</span>}
				

        <div className="form-group">
				  <label className="control-label col-sm-5" for="comment">Product Description FR:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment"
					onChange={(e)=>setProductDescriptionFR(e.target.value)} value = {productDescriptionFR}
					></textarea>
				  </div>
				</div>
				{error && !productDescriptionFR && <span className='invalid-input'>Enter valid description FR</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Percentage Discount:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Percentage Discount" name="percentageDiscount"
					onChange={(e)=>setPercentageDiscount(e.target.value)} value={percentageDiscount}
					/>
				  </div>
				</div>
				{error && !percentageDiscount && <span className='invalid-input'>Enter valid percentage discount</span>} 

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Stock Alert:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Stock Alert" name="stockAlert"
					onChange={(e)=>setStockAlert(e.target.value)} value={stockAlert}
					/>
				  </div>
				</div>
				{error && !stockAlert && <span className='invalid-input'>Enter stock alert</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Online Date:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="text" placeholder="Online Date" name="onlineDate"
					onChange={(e)=>setOnlineDate(e.target.value)} value={onlineDate}
					/>
				  </div>
				</div>
				{error && !onlineDate && <span className='invalid-input'>Enter online date</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Approuved By:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="text" placeholder="Approuved By" name="approuvedBy"
					onChange={(e)=>setApprouvedBy(e.target.value)} value={approuvedBy}
					/>
				  </div>
				</div>
				{error && !approuvedBy && <span className='invalid-input'>Enter approuved by</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>main_image:</label>
				  <div className="col-sm-10">
					<input type="file" className="form-control" id="text"  name="mainImage"
					onChange={(e)=>setMainImage(e.target.value)} value={mainImage}
					/>
				  </div>
				</div>
				{error && !mainImage && <span className='invalid-input'>Enter main image</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>auxiliary_images:</label>
				  <div className="col-sm-10">
					<input type="file" className="form-control" id="text"  name="auxiliaryImages"
					onChange={(e)=>setAuxiliaryImage(e.target.value)} value = {auxiliaryImage}
					/>
				  </div>
				</div>
				{error && !auxiliaryImage && <span className='invalid-input'>Enter auxiliary images</span>}

				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<Link to="#"><button type="submit" onClick={handleAddProduct} className="btn btn-default">Submit</button></Link>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>

</div>

    
  )
}
