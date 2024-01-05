import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Contacts", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profilePicUrl: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: true
        },
      login: {
        type: DataTypes.STRING,
        allowNull: true
        },
      plano: {
        type: DataTypes.STRING,
        allowNull: true
        },
      bloqueado: {
        type: DataTypes.STRING,
        allowNull: true
        },
      cpfcnpj: {
        type: DataTypes.STRING,
        allowNull: true
        },
      titulo: {
        type: DataTypes.STRING,
        allowNull: true
        },
      linha_digitavel: {
        type: DataTypes.STRING,
        allowNull: true
        },
      copiacola: {
        type: DataTypes.STRING,
        allowNull: true
        },
      valor: {
        type: DataTypes.STRING,
        allowNull: true
        },
      data_vencimento: {
        type: DataTypes.STRING,
        allowNull: true
        },
      categoria: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '0'
        },
      tentativas: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '0'
        },
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Contacts");
  }
};
