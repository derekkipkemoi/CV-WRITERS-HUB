'use client'
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { format } from 'date-fns';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Modal,
  IconButton,
  List, ListItem, ListItemIcon, ListItemText,
  Divider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import { Payment, MobileScreenShare, Google } from '@mui/icons-material';
import { orderClient } from '@/lib/order/client';
import { OrderObjectType } from '@/types/order';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 34,
  p: 4,
  borderRadius: '8px',
};

type FormData = {
  orderName: string;
  orderPrice: number;
  currency: string;
  orderDate: string;
  orderDescription: string;
  paymentMethod: string;
  cardName?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCVC?: string;
  mpesaPhoneNumber?: string;
  googlePayEmail?: string;
};

const CheckoutForm = () => {
  const { register, handleSubmit, control, formState: { errors }, watch } = useForm<FormData>();
  const paymentMethod = watch('paymentMethod', 'card'); // Watch paymentMethod field
  const orderId = localStorage.getItem('orderId');
  const [order, setOrder] = useState<OrderObjectType | null>(null);

  // Fetch order details
  const fetchOrder = async () => {
    if (orderId) {
      const { data } = await orderClient.getOrder(orderId);
      setOrder(data || null);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [orderId]);

  const formatDate = (dateString: Date) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return format(date, 'yyyy-MM-dd');
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async () => {
    // Handle submission logic here
    localStorage.removeItem('orderId');
  };

  if (!order) return null; // Guard clause to ensure `order` is loaded

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
        Payment method and checkout
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Select your payment method and checkout
      </Typography>
      <Divider sx={{ height: '5px', borderColor: 'primary.main' }} />
      <Box sx={{ my: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {/* Payment Method on Left */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Select Payment Method
                  </Typography>
                  <FormControl component="fieldset">
                    <Controller
                      name="paymentMethod"
                      control={control}
                      defaultValue="card"
                      render={({ field }) => (
                        <RadioGroup
                          {...field}
                          aria-label="paymentMethod"
                          value={field.value}
                        >
                          <FormControlLabel
                            value="card"
                            control={<Radio />}
                            label={<Box display="flex" alignItems="center"><Payment /> Card Payment</Box>}
                          />
                          <FormControlLabel
                            value="mpesa"
                            control={<Radio />}
                            label={<Box display="flex" alignItems="center"><MobileScreenShare /> Mpesa</Box>}
                          />
                          <FormControlLabel
                            value="googlepay"
                            control={<Radio />}
                            label={<Box display="flex" alignItems="center"><Google /> Google Pay</Box>}
                          />
                        </RadioGroup>
                      )}
                    />
                  </FormControl>
                  {paymentMethod === 'card' && (
                    <Box mt={2}>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>Card Details</Typography>
                      <TextField
                        fullWidth
                        label="Card Name"
                        {...register('cardName', { required: 'Card Name is required' })}
                        error={!!errors.cardName}
                        helperText={errors.cardName?.message}
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Card Number"
                        {...register('cardNumber', { required: 'Card Number is required' })}
                        error={!!errors.cardNumber}
                        helperText={errors.cardNumber?.message}
                        variant="outlined"
                        sx={{ mt: 2 }}
                      />
                      <Grid container spacing={2} sx={{ mt: 0.5 }}>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            label="Expiry Date"
                            type="month"
                            {...register('cardExpiry', { required: 'Expiry Date is required' })}
                            error={!!errors.cardExpiry}
                            helperText={errors.cardExpiry?.message}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            label="CVC"
                            type="number"
                            {...register('cardCVC', { required: 'CVC is required' })}
                            error={!!errors.cardCVC}
                            helperText={errors.cardCVC?.message}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                  {paymentMethod === 'mpesa' && (
                    <Box mt={2}>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>Mpesa Phone Number</Typography>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        {...register('mpesaPhoneNumber', { required: 'Mpesa Phone Number is required' })}
                        error={!!errors.mpesaPhoneNumber}
                        helperText={errors.mpesaPhoneNumber?.message}
                        variant="outlined"
                      />
                    </Box>
                  )}
                  {paymentMethod === 'googlepay' && (
                    <Box mt={2}>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>Google Pay Email</Typography>
                      <TextField
                        fullWidth
                        label="Google Pay Email"
                        {...register('googlePayEmail', { required: 'Google Pay Email is required' })}
                        error={!!errors.googlePayEmail}
                        helperText={errors.googlePayEmail?.message}
                        variant="outlined"
                      />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* Order Details on Right */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Order Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Order Name"
                        {...register('orderName')}
                        defaultValue={order.package.title}
                        variant="outlined"
                        InputProps={{ readOnly: true }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="order-price">Order Price</InputLabel>
                        <OutlinedInput
                          id="order-price"
                          startAdornment={<InputAdornment position="start">{order.package.currency.symbol}</InputAdornment>}
                          label="Order Price"
                          type="number"
                          {...register('orderPrice')}
                          defaultValue={order.package.price}
                          inputProps={{ readOnly: true }}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Order Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        {...register('orderDate')}
                        defaultValue={formatDate(order.date)}
                        variant="outlined"
                        InputProps={{ readOnly: true }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Order Note"
                        InputLabelProps={{ shrink: true }}
                        {...register('orderDescription')}
                        defaultValue={order.note}
                        variant="outlined"
                        InputProps={{ readOnly: true }}
                      />
                    </Grid>
                  </Grid>
                  <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={handleOpen}>
                      View More Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button type="submit" variant="contained" color="primary">
              Proceed to Payment
            </Button>
          </Box>
        </form>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Order : {order.package.title}</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <ListItem>
              <ListItemIcon>
                {order.requireCoverLetter ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
              </ListItemIcon>
              <ListItemText primary="Order Has Cover Letter" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {order.requireLinkedInOptimization ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
              </ListItemIcon>
              <ListItemText primary="Order Has LinkedIn Optimization" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {order.resume.name ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
              </ListItemIcon>
              <ListItemText primary="Order Has File" />
            </ListItem>
            {order.template ? (
              <ListItem>
                <ListItemText primary="Order Template" secondary={order.template.name} />
              </ListItem>
            ) : ""}
            <ListItem>
              <ListItemText primary="Order Status" secondary={order.status} />
            </ListItem>
          </List>
        </Box>
      </Modal>
    </Box>
  );
};

export default CheckoutForm;
