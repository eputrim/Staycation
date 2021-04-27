import React from "react";

import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section class="container" key={`category-${index1}`}>
        <h4 class="mb-3 font-weight-medium">{category.name}</h4>
        <div class="container-grid">
          {category.items.length === 0 ? (
            <div class="row">
              <div class="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  class="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <div class="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular <span class="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure class="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.imageUrl}
                        alt="{item.name}"
                        class="img-cover"
                      />
                    </figure>
                    <div class="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/#{item._id}`}
                        class="stretched-link d-block text-gray-800"
                      >
                        <h5 class="h4 text-gray-900">{item.name}</h5>
                        <span class="text-gray-500">
                          {item.city}, {item.country}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
