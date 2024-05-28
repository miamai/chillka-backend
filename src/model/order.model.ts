import { Model, Schema, model } from 'mongoose';
import {
  OrderSchemaModel,
  OrderStatusEnum,
  PaymentMethodEnum,
  PaymentStatusEnum,
} from '../type/order.type';

type OrderModel = Model<OrderSchemaModel, object>;

const OrderSchema = new Schema<OrderSchemaModel, OrderModel>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    activityId: {
      type: Schema.Types.ObjectId,
      ref: 'Activity',
      required: true,
    },
    ticketId: {
      type: Schema.Types.ObjectId,
      ref: 'Ticket',
      required: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
    },
    phone: {
      type: Schema.Types.String,
      required: true,
    },
    startDateTime: {
      type: Schema.Types.Date,
    },
    endDateTime: {
      type: Schema.Types.Date,
    },
    payment: {
      amount: {
        type: Schema.Types.Number,
        required: true,
        default: 0,
      },
      status: {
        type: Schema.Types.String,
        enum: PaymentStatusEnum,
        default: PaymentStatusEnum.UNPAID,
        required: true,
      },
      method: {
        type: Schema.Types.String,
        enum: PaymentMethodEnum,
        required: true,
      },
      orderNumber: {
        type: Schema.Types.Number,
      },
    },
    orderStatus: {
      type: Schema.Types.String,
      enum: OrderStatusEnum,
      default: OrderStatusEnum.VALID,
      required: true,
    },
    serialNumber: {
      type: Schema.Types.String,
    },
  },
  {
    collection: 'orders',
    timestamps: true,
  }
);

const Order = model<OrderSchemaModel, OrderModel>('Order', OrderSchema);

export default Order;