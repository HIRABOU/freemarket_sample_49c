if @secondCategories.present? && @thirdCategories.present?
  json.array! @thirdCategories do |thirdCategory|
    json.id thirdCategory.id
    json.name thirdCategory.name
    json.ancestry thirdCategory.ancestry
  end
else
  json.array! @secondCategories do |secondCategory|
    json.id secondCategory.id
    json.name secondCategory.name
    json.ancestry secondCategory.ancestry
  end
end
