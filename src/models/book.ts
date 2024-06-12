import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import Author from './author';


class Book extends Model {
  public id!: string;
  public bookCode!: string;
  public title!: string;
  public description!: string;
  public publishedYear!: number;
  public price!: number;
  public externalId!: string;
  public createdBy!: string;
}

Book.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    bookCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    publishedYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    externalId: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.UUID,
      references: {
        model: Author,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Book',
  }
);

export default Book;
