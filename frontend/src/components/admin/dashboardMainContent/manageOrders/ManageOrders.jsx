import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../sideMenu/SideMenu';
import '../manageOrders/manageOrder.css';
import toast from 'react-hot-toast'

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState({});
  const statuses = ['pending', 'processing', 'verified'];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/getOrders`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    setSelectedStatuses(prevStatuses => ({
      ...prevStatuses,
      [orderId]: newStatus
    }));
  };

  const updateStatus = async (orderId) => {
    const newStatus = selectedStatuses[orderId];
    try {
      await axios.put(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/updateOrderStatus`, { orderId, status: newStatus });
      setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? { ...order, status: newStatus } : order));
      setSelectedStatuses(prevStatuses => ({ ...prevStatuses, [orderId]: '' })); // Reset the selected status
      toast.success('Data udpated')
      
    } catch (error) {
      console.error('Error updating order status', error);
    }
  };

  return (
    <div className="ManageOrdersContainer">
      <div className="adminDashboard">
        <div className="sideMenuContainer"><SideMenu/></div>
        <div className="container">
          <h3>Manage Orders Page</h3>
          <div className="ordersTable">
            <div className="tableHeader">
              <div>User</div>
              <div>Document</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            {orders.map(order => (
              <div className="tableRow" key={order._id}>
                <div>{order.user.name}</div>
                <div>{order.items.map(item => item.heading).join(', ')}</div>
                <div>
                  <select className='selectProcessingDropdown'
                    value={selectedStatuses[order._id] || order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button onClick={() => updateStatus(order._id)}>Update</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
