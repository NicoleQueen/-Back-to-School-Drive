class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :district, :description
end
