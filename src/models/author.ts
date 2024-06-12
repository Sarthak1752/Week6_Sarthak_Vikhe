import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import Book from './book';

class Author extends Model {
  public id!: string;
  public name!: string;
  public bio!: string;
  public birthdate!: Date;
  public isSystemUser!: boolean;
}

Author.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    birthdate: {
      type: DataTypes.DATE,
    },
    isSystemUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Author',
  }
);

export default Author;
