use base64::Engine;
use serde::Deserialize;

pub fn serialize_base64<S>(v: &Option<Vec<u8>>, s: S) -> Result<S::Ok, S::Error>
where
    S: serde::Serializer,
{
    match v {
        Some(v) => s.serialize_str(&base64::engine::general_purpose::STANDARD.encode(v)),
        None => s.serialize_none(),
    }
}

pub fn deserialize_base64<'de, D>(d: D) -> Result<Option<Vec<u8>>, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let s = String::deserialize(d)?;
    match base64::engine::general_purpose::STANDARD.decode(&s) {
        Ok(v) => Ok(Some(v)),
        Err(_) => Ok(None),
    }
}
