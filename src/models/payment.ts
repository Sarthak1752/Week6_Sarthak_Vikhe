import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import User from './user';
import Book from './book';

class Payment extends Model {
  public id!: string;
  public amount!: number;
  public status!: string;
  public userId!: string;
  public bookId!: string;
  public createdAt!: Date;
}

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
      },
      allowNull: false,
    },
    bookId: {
      type: DataTypes.UUID,
      references: {
        model: Book,
        key: 'id',
      },
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Payment',
    timestamps: true,
  }
);

export default Payment;
