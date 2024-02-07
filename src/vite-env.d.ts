/// <reference types="vite/client" />
type AddOn = {
  title: string;
  subtitle: string;
  monthly: number;
  yearly: number;
};

type Plan = {
  title: string;
  monthly: number;
  yearly: number;
  promo: string;
};

type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
}

type InputValidity = {
  name: boolean;
  email: boolean;
  phone: boolean;
}